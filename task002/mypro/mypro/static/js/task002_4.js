function json_parse(data){
    var loads_data = JSON.parse(data.replace(/&quot;/g,'"'));
    return loads_data;
}

$(".search_txt").bind('keyup',function(evt){
    var k = window.event ? evt.keyCode : evt.which;
    var txt = $(this).val();
    if (txt != "" && k != 38 && k!= 40 && k!= 13) {  
        $.ajax({
            type: 'GET',
            url: "/search_ajax",
            data:{
                'keywords': txt,
            },
            async: true,
            success: function(data){
                data = json_parse(data);

                if (data.length > 0) {
                    var layer = "";
                    layer = "<ul>"
                    $.each(data, function(idx, item){
                        layer += "<li>" + item + "</li>"
                    })
                    layer += "</ul>"

                    $(".hint").empty();
                    $(".hint").append(layer);
                    $(".hint").css("display","")

                    $("li").click(function(){
                        $(".search_txt").val($(this).text());
                        $(".hint").css("display","none")
                    })
           } else {
            $(".hint").empty();
            $(".hint").css("display","none")
           }
        }
    });
}
    $(".hint").bind("mouseleave", function(){
        $(".hint").css("display","none")
    })
    $(".hint").css({
        top: $(".search_form").offset().top + $(".search_form").height(),
        left: $(".search_form").offset().left - 8,
        border: "1px solid #999",
    }).show();
});

