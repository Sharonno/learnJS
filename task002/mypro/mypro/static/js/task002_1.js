$("#btn").click(function(){
    var txt = $("#txt").val();
    //console.log(typeof(txt));
    var arr = [];
    v = txt.split("，");
    v = uniqueArr(v);
    //console.log(v)
    txt_1 = $("<p></p>")
    txt_1.text(v)
    
    $(this).parent().append(txt_1)
    //console.log($(this))
});

$("#btn2").click(function(){
    var txt = $("#txt2").val();
    v = txt.split(/\n|\s|\ |\，|\,|\、|\;|\ |\；/);
    v = uniqueArr(v);
    console.log(v)
    txt_1 = $("<p></p>")
    txt_1.text(v)
    
    $(this).parent().append(txt_1)
    //console.log($(this))
});

$("#btn3").click(function(){
    var txt = $("#txt3").val();
    if (!txt) {
        $(".errmsg").text("爱好数量不能空")
    }
    v = txt.split(/\n|\s|\ |\，|\,|\、|\;|\ |\；/);
    console.log(v)
    if (v.length>10) {
        //alert()
        $(".errmsg").text("爱好数量不能超过10个")
    } 
    
    v = uniqueArr(v);
    //console.log(v)
    para = $("<p></p>")
    $.each(v,function(index, data){
        var cb = $("<input></input>");
        cb.attr("type","checkbox");
        cb.attr("id",index);
        //cb.append(data);
        var lb = $("<label></label>");
        lb.attr("for", index);
        lb.append(data+'</br>')
        para.append(cb,lb)
        
    })

    $(this).parent().append(para)
    //console.log($(this))
});

function uniqueArr(arr){
    var result = [];
    var has = {};
    for (var i = 0,elem; (elem = arr[i]) != null ; i++) {
        if(!has[elem]){
            result.push(elem);
            has[elem] = true;
        }
    };
    return result
}