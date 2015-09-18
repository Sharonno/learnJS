$(document).ready(function(e){
    var flag = "gl";
    var point = 0;
    function showImg(){
        if (point == -2700) {
            flag = "gr";
        } else if(point == 0){
            flag = "gl";
        }
        if (flag == "gl") {
            $(".imgs").animate({left:point},500);
            point -= 900;
        } else if (flag == "gr") {
            $(".imgs").animate({left:point},500);
            point += 900;
        };
    }
    set = setInterval(showImg,5000);

})


$(".index li").each(function(index, element){
    $(this).click(function(e){
        $(".imgs").animate({left:-900*index},500);
    })
})
/*
function scroller(obj){
    var $self = obj.find(".imgs");
    var lineLeft = $self.find("li:first").width();
    $self.animate({marginLeft: -lineLeft}, 500, function(){
        $self.css({marginLeft:0}).find("li:first").appendTo($self)
    })
}

var $this = $(".box");
var scrollTimer;
$this.hover(function(){
    clearInterval(scrollTimer);
},function(){
    scrollTimer = setInterval(function(){
        scroller($this);
    },2000);
}).trigger("mouseleave")
*/