// if(cms_player.yun = true){document.write('<iframe class="embed-responsive-item" src="'+'https://66dy.top/ck/?url='+cms_player.url+'" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>');}


//var zanpiancms_player = {"url":"https:\/\/www.nmgxwhz.com:65\/20200623\/0Jw0FlGZ\/index.m3u8","name":"123kum3u8","copyright":"0","apiurl":"\/\/jx.wlzy.tv\/jx.php?url=","adtime":"0","adurl":"\/\/www.66dyy.com\/loading.html","nexturl":""};
//var cms_player = {"yun":true,"url":"https:\/\/shishang.dingxiangzuida.com\/20200422\/183_d498d911\/index.m3u8","copyright":0,"name":"zuidam3u8","jiexi":"https:\/\/www.coolcoolcloud.com\/m3u8.php?url=","time":3,"buffer":"https:\/\/www.wellsts.net\/loading.html","pause":"https:\/\/www.wellsts.net\/loading.html","next_path":"\/neidi\/56847\/1-2.html","next_url":"https:\/\/shishang.dingxiangzuida.com\/20200422\/182_126dad65\/index.m3u8"};

document.write('<ifr'+'ame class="zanpiancms-play-iframe" id="buffer" src="'+cms_player.buffer+'" width="100%" height="100%" frameborder="0" scrolling="no" style="display:none;position:absolute;z-index:9;"></ifr'+'ame>');
document.write('<ifr'+'ame class="zanpiancms-play-iframe" src="'+cms_player.jiexi+cms_player.url+'" allowFullscreen="true" width="100%" height="100%"  frameborder="0" scrolling="no"></ifr'+'ame>');

ads_show();
function ads_show(){
  try{
	   if(cms_player.buffer!=null && cms_player.time>0){
		 document.getElementById("buffer").style.display = "block";
		 setTimeout("document.getElementById(\"buffer\").style.display=\"none\"",cms_player.time*1000);	
	   }else{
		 setTimeout(function(){ads_show();},200);
	   }
	}catch(e){}
}