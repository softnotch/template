# Generated by Django 2.2.12 on 2020-07-24 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20200723_2227'),
    ]

    operations = [
        migrations.AddField(
            model_name='projecttemplate',
            name='imageOverlay',
            field=models.CharField(blank=True, max_length=7),
        ),
    ]
