#!/usr/bin/env python
# coding: utf-8
from __future__ import division
from django.shortcuts import render

import json
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.template import RequestContext


# Create your views here.
def index(request):
    data = {}
    return render_to_response('task002_4.html', data, RequestContext(request))

def search_ajax(request):
    q = request.GET.get('keywords', '')
    #s = []
    if q == 'j':
        s = ['java','javascript','jquery','json']
        s = json.dumps(s)
    elif q == 'w':
        s = ['World','w3cschool','webqq','wx']
        s = json.dumps(s)
    else:
        s = ['']
        s = json.dumps(s)
          
    return HttpResponse(s)
