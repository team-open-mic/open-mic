# Generated by Django 3.1.7 on 2021-03-04 03:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0024_auto_20210304_0028'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='sender_name',
            field=models.TextField(blank=True, max_length=100, null=True),
        ),
    ]
