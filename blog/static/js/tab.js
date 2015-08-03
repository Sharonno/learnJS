var tabs = function(){
  var titul = document.getElementById('nav');
  var titles = titul.getElementsByTagName('li');
  var condiv = document.getElementById('menu_con');
  var content = condiv.getElementsByTagName('div');

  for(var i= 0;i< titles.length; i++){
    titles[i].index = i;
    titles[i].onmouseover = function(){
      for(var i= 0; i<titles.length; i++){
            titles[i].className = '';
      }
      this.className = 'active';
      for(var j=0; j<content.length; j++){
          content.className = 'hide';
      }
      content[this.index].className = 'show';
    }
  }

}
