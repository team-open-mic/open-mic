# Generated by Django 3.1.7 on 2021-03-07 16:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0034_userprofile_spotify'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='wanted_instruments',
            new_name='wantedinstruments',
        ),
    ]
