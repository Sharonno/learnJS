#coding=utf-8
from django.shortcuts import render_to_response,HttpResponseRedirect,HttpResponse,RequestContext
from models import Article,Comment,User
#from django.template.context_processors import csrf
from django.core.paginator import Paginator, InvalidPage, EmptyPage, PageNotAnInteger
#from django import forms
from forms import pub_articleForm,UserForm



# Create your views here.
def home(request):
    html_template = 'home.html'
    data = {'data': 'no'}

    return render_to_response(html_template, data, RequestContext(request))


def regist(request):
	if request.method == 'POST':
		uf = UserForm(request.POST)

		if uf.is_valid():
			#username = uf.cleaned_data['username','']
			#password1 = uf.cleaned_data['password1','']
			# password2 = uf.cleaned_data['password2','']
			# email = uf.cleaned_data['email','']
			username = request.POST.get('username','')
			password1 = request.POST.get('password1','')
			password2 = request.POST.get('password2','')
			email = request.POST.get('email','')

			if password1 == password2:
				user =User(username = username, password = password1, email = email)
				user.save()
				return render_to_response('reg_ok.html')
			else:
				return render_to_response('reg_fail.html')
	else:
		uf = UserForm()
		#uf = forms.UserForm()

	return render_to_response('regist.html',{'uf':uf}, context_instance=RequestContext(request))

def login(request):

	if request.method == 'POST':
		uf = UserForm(request.POST)
		email = request.POST.get('email','')
		userpasswd = request.POST.get('password1','')
		
		if email:
			try:
				user = User.objects.get(email=email)
			except:
				return render_to_response('login_fail.html')
			else:
				if email == user.email and userpasswd == user.password:
					request.session['email'] = email
					request.session['username'] = user.username
					return HttpResponseRedirect('/article/index/')
				else:
					return HttpResponseRedirect('/article/login/')
	else:
		uf = UserForm()	

	return render_to_response('login.html',{'uf':uf},context_instance=RequestContext(request))	

def index(request):
    username = request.session.get('username','anybody')
    return render_to_response('index.html' ,{'username':username})

def logout(request):
     
    del request.session['username']
    return HttpResponseRedirect('/article/login/')

def comment_add(request):
	if request.method == 'POST':

		article_id = request.POST.get('article_id','')
		detail = request.POST.get('detail','')
		#print 'okokokokokokokokoklalalallala'
		if article_id and detail :

			comment = Comment()
			comment.detail = detail
			comment.article = Article(aid=article_id)
			comment.save()

			return HttpResponseRedirect('/article/view/?aid=%s' % article_id)

def list(request):

	articles = Article.objects.order_by("-aid").all()
	#comment_cnt = Comment.objects.comment_count(articles.aid) 

	# for article in articles:
	#     print article
	#     aid = article.aid
	#     comments = Comment.objects.filter(Article=aid).order_by("-id").all()
	#     cnt = comments.count()
	#     print cnt

	paginator = Paginator(articles, 5)
	page = request.GET.get('page', 0)

	try:
		contacts = paginator.page(page)
	except PageNotAnInteger:
		contacts = paginator.page(1)
	except EmptyPage:
		contacts = paginator.page(paginator.num_pages)

	return render_to_response('list.html',{'contacts':contacts})

def view(request):
	
	data = {}
	aid = request.GET.get('aid', '')
	article = Article.objects.get(aid=aid)
	article.view_cnt = article.view_cnt +1
	article.save()
	print article.view_cnt
	comments = Comment.objects.filter(article=aid).order_by('-id').all()
	#cnt = len(comments)
	data = {
		'article': article,
		'comments':comments,

		}
	return render_to_response('view.html', data, context_instance=RequestContext(request))
	

def delete(request):
	#print request
	
	aid=request.GET.get('aid', '')
	#print aid
	
	if aid:
		article = Article.objects.get(aid=int(aid))
		article.delete()
		return HttpResponseRedirect('/article/list')
	else:
		return HttpResponse(u'delete failed')

def add(request):
	if request.method == 'POST':
		form = pub_articleForm(request.POST)
		
		if form.is_valid():
			#content  = request.POST.get('content','')
			content = form.cleaned_data['content']
			print content
			title = request.POST.get('title','')
			tag = request.POST.get('tag','')

			new = Article(title=title, tag=tag, content=content)
			new.save()
		return HttpResponseRedirect('/article/list')
	else:
		form = pub_articleForm()
		return render_to_response('add.html', {'form':form}, context_instance=RequestContext(request))
		
