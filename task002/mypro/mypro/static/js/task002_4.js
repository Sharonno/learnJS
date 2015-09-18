
$(document).ready(function(){

  $("#search").keyup(function(){
    var a = $("#search").val()
    //send the input value to server via ajax
    $.ajax({
        type: "GET",
        url: "/search_ajax",
        data: {
            'keywords': a
        },
        //async: false,
        success: function(data){
            if (data) {
                $("#txtHint").html(data);
            };
            
            console.log("send the value to the view_function, go and get it")
        },
        error: function(){
            console.log("sorry")
        }
    });
    
  });

  $("#b01").click(function(){
    htmlobj = $.ajax(
                      {
                        url:"statics/test1.txt",
                        data: {
                                name: 'simon',
                                password: '123456'
                                },
                        async:false,
                        success: function(){
                            //console.log(status)
                            console.log("bingo")
                        }
                      }
                    );
  $("#myDiv").html(htmlobj.responseText);
  });
});

