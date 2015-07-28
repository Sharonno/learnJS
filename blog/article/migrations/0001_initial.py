# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import DjangoUeditor.models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('aid', models.AutoField(serialize=False, primary_key=True)),
                ('title', models.CharField(max_length=30)),
                ('content', DjangoUeditor.models.UEditorField(verbose_name='content')),
                ('tag', models.CharField(max_length=40)),
                ('publish_date', models.DateField(auto_now=True)),
                ('view_cnt', models.IntegerField(default=0, editable=False)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('detail', DjangoUeditor.models.UEditorField(verbose_name='comments_detail')),
                ('comment_date', models.DateField(auto_now=True)),
                ('article', models.ForeignKey(related_name='article_comment', to='article.Article')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('username', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254, serialize=False, primary_key=True)),
                ('logo', models.ImageField(upload_to=b'./heads/', blank=True)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
