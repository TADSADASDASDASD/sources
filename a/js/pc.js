function hideplayer(){
  var system = {};  
  var p = navigator.platform;  
  var u = navigator.userAgent;  

  system.win = p.indexOf("Win") == 0;  
  system.mac = p.indexOf("Mac") == 0;  
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  
  if (system.win || system.mac || system.xll) {
      if (u.indexOf('Windows Phone') > -1) {

      }else {  
          $('.player').html('<img src="https://ae01.alicdn.com/kf/H331a0bd7b3154faf9f1fa8fee726b505r.jpg" height="100%" width="100%" />');
      }  
  }  
	
}
hideplayer();                                                                        
