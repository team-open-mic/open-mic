# Generated by Django 3.1.7 on 2021-02-25 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210225_0302'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='wanted_instruments',
            field=models.ManyToManyField(blank=True, null=True, related_name='users', to='core.WantedInstruments'),
        ),
    ]
