from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from core.models import User, UserProfile, UserFollowing, Messages
from core.serializers import UserSerializer, UserProfileSerializer, UserFollowingSerializer, MessageSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response 
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from django.core.exceptions import PermissionDenied

class IsOwnerOrReadOnly(permissions.BasePermission):
     
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user.is_authenticated:
            return True

        return False

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
                return True

        return obj.user == request.user



class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [
       IsAuthenticated
    ]
   
    def get_queryset(self):
        return User.objects.all()

    def perform_create(self, serializer):
        return serializer.save(self.request.user)
    
    @action(permission_classes=[IsAuthenticated], detail=False)
    def me(self, request, *args, **kwargs):
        User = get_user_model()
        self.object = get_object_or_404(User, pk=request.user.id)
        serializer = self.get_serializer(self.object)
        return Response(serializer.data)

class UserProfileViewSet(ModelViewSet):
    serializer_class = UserProfileSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser, FileUploadParser]
    permission_classes =[
        permissions.IsAuthenticated, IsOwnerOrReadOnly
        ]
    
    def get_queryset(self):
        return UserProfile.objects.all()

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'])
    def me (self, request):
        queryset = UserProfile.objects.filter(user=request.user)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
class MessageViewSet(ModelViewSet):
    serializer_class = MessageSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return  Messages.objects.all() 

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise PermissionDenied()
        serializer.save(sender=self.request.user)
        

       
  
class UserFollowingViewSet(ModelViewSet):

    permission_class = [IsOwnerOrReadOnly]

    serializer_class = UserFollowingSerializer
    queryset = UserFollowing.objects.all()

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)

        