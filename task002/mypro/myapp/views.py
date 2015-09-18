#!/usr/bin/env python
# coding: utf-8
from __future__ import division
from django.shortcuts import render

import json
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext
import json

# Create your views here.
def index(request):
    data = {}
    return render_to_response('task002_4.html', data, RequestContext(request))

def search_ajax(request):
    q = request.GET.get('keywords', '')
    #print q
    if q == 'H':
        s = '何'
    elif q == 'W':
        s = '王'
    else:
        s = ''
          
    return HttpResponse(s)
