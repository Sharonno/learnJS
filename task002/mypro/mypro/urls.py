#!/usr/bin/env python
# coding: utf-8


from django.conf.urls import patterns, include, url
from django.contrib import admin
import os
import os.path

static_dir = os.path.join(os.path.dirname(__file__),"static").replace("\\","/")
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mypro.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
    url(r'^', include('myapp.urls')),
)

urlpatterns += patterns('',
    url(r'^statics/(?P<path>.*)$', 'django.views.static.serve', {"document_root": static_dir},name='static'),
)
