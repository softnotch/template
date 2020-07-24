# Generated by Django 3.0.8 on 2020-07-23 16:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20200723_1335'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projecttemplate',
            old_name='description',
            new_name='quote',
        ),
        migrations.RemoveField(
            model_name='projecttemplate',
            name='title',
        ),
        migrations.AddField(
            model_name='projecttemplate',
            name='sectionColor',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AddField(
            model_name='projecttemplate',
            name='sectionTextColor',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
