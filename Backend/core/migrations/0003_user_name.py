# Generated by Django 3.1.7 on 2021-02-22 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_bandprofile_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='name',
            field=models.CharField(default='', max_length=255),
        ),
    ]