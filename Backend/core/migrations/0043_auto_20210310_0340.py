# Generated by Django 3.1.7 on 2021-03-10 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0042_auto_20210310_0059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='messages',
            name='created_at',
            field=models.DateField(),
        ),
    ]
