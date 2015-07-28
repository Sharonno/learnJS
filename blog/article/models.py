#coding=utf-8
from django.db import models
from DjangoUeditor.models import UEditorField 
# Create your models here.
#class Comment(models.Model):
#    
#    detail = models.TextField()
class User(models.Model):

    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField(primary_key=True)
    logo = models.ImageField(upload_to='./heads/', blank=True)
    date = models.DateField(auto_now_add=True)

    def __str_(self):
        return self.username

class Article(models.Model):
    
    aid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30)    
    #content = models.TextField()
    content = UEditorField(u'content', width=600, height=300)
    tag = models.CharField(max_length=40)
    publish_date = models.DateField(auto_now=True)
    view_cnt = models.IntegerField(default=0, editable=False)
    def __str__(self):
        return self.title

#class CommentManager(models.Manager):
#    def comments_count(self, aid):
#        comment_cnt = self.filter(article=aid).count()
#        return comment_cnt
        

class Comment(models.Model):

    article = models.ForeignKey(Article, related_name='article_comment')
    detail = UEditorField(u'comments_detail', width=600, height=300)
    comment_date = models.DateField(auto_now=True)

