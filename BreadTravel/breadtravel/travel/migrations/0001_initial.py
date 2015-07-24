# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('aid', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=30)),
                ('content', models.TextField()),
                ('tag', models.CharField(max_length=30)),
                ('publish_date', models.DateField(auto_now=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('comment', models.TextField()),
                ('article', models.ForeignKey(to='travel.Article')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
