#!/usr/bin/env python
# coding: utf-8


from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'myapp.views.index', name='index'),
    url(r'search_ajax$', 'myapp.views.search_ajax', name='search_ajax'),
)