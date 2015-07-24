#coding=utf-8
from django.db import models

# Create your models here.
class Article(models.Model):
    aid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)
    content = models.TextField()
    tag = models.CharField(max_length=30)
    publish_date = models.DateField(auto_now=True)
    def __str__(self):
        return self.title


class Comment(models.Model):
    article = models.ForeignKey(Article)
    comment = models.TextField()

