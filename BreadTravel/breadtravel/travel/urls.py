#!/usr/bin/env python
# coding: utf-8
from django.conf.urls import patterns, include, url
urlpatterns = patterns('',
    url(r'test/$', 'travel.view.travel', name='travel'),
)
