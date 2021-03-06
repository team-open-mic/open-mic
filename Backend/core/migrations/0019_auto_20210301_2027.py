# Generated by Django 3.1.7 on 2021-03-01 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0018_auto_20210301_1850'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='band_location',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='userprofile',
            old_name='band_members',
            new_name='location',
        ),
        migrations.RenameField(
            model_name='userprofile',
            old_name='band_size',
            new_name='state',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='ind_zipcode',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='website',
            field=models.URLField(blank=True, null=True),
        ),
    ]
