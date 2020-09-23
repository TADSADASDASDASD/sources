$(function(){
    var surl = location.href;
	var surl2 = $(".place a:eq(1)").attr("href");
	$("#nav .zh li a").each(function() {
		if ($(this).attr("href")==surl || $(this).attr("href")==surl2) $(this).parent().addClass("on")
	});
});

$("#nav ul li").hover(function() {
                         $(this).addClass("hover").siblings().removeClass("hover");
                         $(this).find("#nav ul li a").addClass("hover");
                         $(this).find("#nav ul li ul").show();
                     }, function() {
                         //$(this).css("background-color","#f5f5f5");
                         $(this).find("#nav ul li ul").hide();
                         //$(this).find(".nav a").removeClass("hover");
                         $(this).removeClass("hover");
                         $(this).find("#nav ul li a").removeClass("hover");
                     })

$(document).ready(function() { 
var tags_a = $("#divTags a"); 
tags_a.each(function(){ 
var x = 9; 
var y = 0; 
var rand = parseInt(Math.random() * (x - y + 1) + y); 
$(this).addClass("tags"+rand); 
}); 
}) 

$(document).ready(function() { 
var tags_a = $("#divhottag a"); 
tags_a.each(function(){ 
var x = 9; 
var y = 0; 
var rand = parseInt(Math.random() * (x - y + 1) + y); 
$(this).addClass("tags"+rand); 
}); 
}) 

$(function() {
			var pull 		= $('#pull');
				menu 		= $('#nav>ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});

$(".search-on").click(function(){
    $(".sj-ss").slideToggle();
    $(".search-on i").toggleClass("fa-close (alias)");
});

		
function  showImg(){
document.getElementById("wxImg").style.display='block';
}
function hideImg(){
document.getElementById("wxImg").style.display='none';
}


zbp.plugin.unbind("comment.reply", "system");
zbp.plugin.on("comment.reply", "txcms2", function(id) {
	var i = id;
	$("#inpRevID").val(i);
	var frm = $('#divCommentPost'),
		cancel = $("#cancel-reply");

	frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
	$('#AjaxComment' + i).before(frm);

	cancel.show().click(function() {
		var temp = $('#temp-frm');
		$("#inpRevID").val(0);
		if (!temp.length || !frm.length) return;
		temp.before(frm);
		temp.remove();
		$(this).hide();
		frm.removeClass("reply-frm");
		return false;
	});
	try {
		$('#txaArticle').focus();
	} catch (e) {}
	return false;
});

zbp.plugin.on("comment.get", "txcms2", function (logid, page) {
	$('span.commentspage').html("Waiting...");
	$.get(bloghost + "zb_system/cmd.php?act=getcmt&postid=" + logid + "&page=" + page, function(data) {
		$('#AjaxCommentBegin').nextUntil('#AjaxCommentEnd').remove();
		$('#AjaxCommentEnd').before(data);
		$("#cancel-reply").click();
	});
})

zbp.plugin.on("comment.postsuccess", "txcms2", function () {
	$("#cancel-reply").click();
});





