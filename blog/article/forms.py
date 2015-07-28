# coding: utf-8

from django.forms import ModelForm
from django import forms
from .models import Article
from DjangoUeditor.forms import UEditorField,UEditorWidget,UEditorModelForm

#class pub_articleForm(forms.Form):
	# title = forms.CharField(max_length=30,widget=UEditorWidget(width=500,height=300,placeholder="文章叫啥名啊"))
	# content = UEditorField(widget=UEditorWidget(width=800,height=500,placeholder="文章讲的啥啊"))
	# tag = models.CharField(max_length=10,widget=UEditorWidget(width=500,height=300,placeholder="文章属于哪类啊"))

class pub_articleForm(UEditorModelForm):
	class Meta:
		model = Article
		fields = ['title', 'content', 'tag']

class UserForm(forms.Form):
    
	username = forms.CharField(label=u'username', max_length=30)
	email = forms.EmailField(label=u'email')
	password1 = forms.CharField(label=u'password', widget=forms.PasswordInput())
	password2 = forms.CharField(label=u'pwd_confirm', widget=forms.PasswordInput())