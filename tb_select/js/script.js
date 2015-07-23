$(document).ready(function(){
    $("#select1 dd").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("#select-all")) {
            $("#selectA").remove();
        } else {
            var copyThisA = $(this).clone();
            /*如果之前有选过，该项是自定义列表dl里的一项，有<a>标签，只是现在被追加了一个id是selectA，所以要提换成新的选择条件的文字 */
            if ($("#selectA").length > 0) {
                $("#selectA a ").html($(this).text());
            } else {
              /* 如果已选条件是空的，就给选择条件（此时已是一个复制<dd>）一个id，再追加到选择自定义列表中去*/
                $(".select-result dl").append(copyThisA.attr("id", "selectA"));
            }
        }
    });
    $("#select2 dd").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("#select-all")) {
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                $("#selectB a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisB.attr("id", "selectB"));
            }
        }
    });
    $("#select3 dd").click(function(){
        /* 选择条件，添加类，删除其他节点的选择类 */
        $(this).addClass("selected").siblings().removeClass("selected");
        /* 如果选择的是全部，则把之前的选择条件的文字从选择结果中删除*/
        if ($(this).hasClass("#select-all")) {
            $("#selectC").remove();
        } else {
            copyThisC = $(this).clone();
            /* 选择了条件，在选择结果中已经有了该项<dd><a></a></dd>而且有了id，如果是同一类的选择条件，则进行条件替换*/
            if ($("#selectC").length > 0) {
                $("#selectC a").html($(this).text());
            } else {
                $(".select-result dl").append(copyThisC.attr("id", "selectC"));
            }
        }
    });

    /* 清空选择列表的默认文字 */
    $(".select dd").live("click", function(){
        if ($(".select-result dd").length > 1){
          console.log($(".select-result dd").length);
          $(".select-no").hide();
        } else {
          $(".select-no").show();
        }
    });
    /* 再次点击取消已选条件，原来选项中的全部要恢复成已选状态 */
    $("#selectA").live("click", function(){
        $(this).remove();
        $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    $("#selectB").live("click", function(){
        $(this).remove();
        $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    $("selectC").live("click", function(){
        $(this).remove();
        $("#selcet3 .select-all").addClass("selected").siblings().removeClass("selected");
    });
});

/*
$(document).ready(function(){
							
	$("#select1 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}
	});
	
	$("#select2 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 dd").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
	
});
*/
