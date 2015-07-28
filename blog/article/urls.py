from django.conf.urls import url

from article import views

urlpatterns = [


	url(r'^$', views.home, name='home'),
	url(r'^home$', views.home, name='home'),
    url(r'^login/$', views.login, name='login'),
    url(r'^regist/$', views.regist, name='regist'),
    url(r'^index/$', views.index, name='index'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^add/$', views.add, name='add'),
    url(r'^delete/$',views.delete, name='delete'),
    url(r'^comment_add/$', views.comment_add, name='comment_add'),
    url(r'^list/$', views.list, name='list'),    
    url(r'^view/$', views.view, name='view'),
]
