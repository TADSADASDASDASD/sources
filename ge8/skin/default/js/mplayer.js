if (typeof myhkplayer !== 'undefined') {
	throw new Error('ge8.cc音乐播放器已加载，禁止重复添加！');
}
if (typeof jQuery === 'undefined') {
	if (confirm("网站没有加载jQuery插件，是否查看如何添加jquery.min.js？\n找到【jquery.min.js】，复制<script>标签，添加到播放器代码上方即可")) {
		window.location = "https://www.bootcdn.cn/jquery/"
	} else {
		throw new Error('请先加载jQuery插件！');
	}
}
window.timer = new Array();
jQuery.fn.extend({
	DragClose: function() {
		if (this.length) for (var a in $(this).data("options"))"dragObj" == a && $(this).data("options").dragObj.dostop()
	},
	Drag: function() {
		var a = {
			dragObj: $(this),
			parentObj: $(document),
			callback: null,
			isPhone: !1,
			lockX: !1,
			lockY: !1,
			maxWidth: 0,
			maxHeight: 0
		};
		arguments.length && (a = $.extend({}, a, arguments[0]));
		a.dragObj.data("options", a);
		var c = $(this)[0],
			b = a.dragObj,
			e = 0,
			d = 0,
			g = a.callback;
		"static" == $(this).css("position") && $(this).css("position", "relative");
		var m = 0,
			n = 0;
		a.isPhone ? (b.__start = function(f) {
			m = Math.max(a.parentObj.width(), a.maxWidth);
			n = Math.max(a.parentObj.height(), a.maxHeight);
			f = event.targetTouches[0];
			e = f.clientX - c.offsetLeft;
			d = f.clientY - c.offsetTop;
			b.on("touchmove", b.__move);
			b.on("touchend", b.__end);
			return !1
		}, b.__move = function(f) {
			touch = event.targetTouches[0];
			f = touch.clientX - e;
			var h = touch.clientX - d,
				k = c.offsetWidth,
				l = c.offsetHeight;
			0 > f ? f = 0 : f + k > m && (f = m - k);
			0 > h ? h = 0 : h + l > n && (h = n - l);
			a.lockX || (c.style.top = h + "px");
			a.lockY || (c.style.left = f + "px");
			g && g(b[0], f, h, k, l);
			return !1
		}, b.__end = function(a) {
			b.off("touchmove");
			b.off("touchend");
			_flag = !1;
			d = e = 0;
			g && g(b[0]);
			return !1
		}, b.dostart = function() {
			b.on("touchstart", b.__start)
		}, b.dostop = function() {
			b.off("touchstart");
			b.off("touchmove");
			b.off("touchend")
		}) : (b.__start = function(f) {
			m = Math.max(a.parentObj.width(), a.maxWidth);
			n = Math.max(a.parentObj.height(), a.maxHeight);
			e = f.clientX - c.offsetLeft;
			d = f.clientY - c.offsetTop;
			$(document).on("mousemove", b.__move);
			$(document).on("mouseup", b.__end);
			b[0].setCapture ? b[0].setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			f.stopPropagation();
			f.preventDefault()
		}, b.__move = function(f) {
			var h = f.clientX - e,
				k = f.clientY - d,
				l = c.offsetWidth,
				p = c.offsetHeight;
			0 > h ? h = 0 : h + l > m && (h = m - l);
			0 > k ? k = 0 : k + p > n && (k = n - p);
			a.lockX || (c.style.top = k + "px");
			a.lockY || (c.style.left = h + "px");
			g && g(b[0], h, k, l, p);
			f.stopPropagation();
			f.preventDefault()
		}, b.__end = function(a) {
			b[0].releaseCapture ? b[0].releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
			$(document).off("mousemove");
			$(document).off("mouseup");
			d = e = 0;
			g && g(b[0]);
			a.stopPropagation();
			a.preventDefault()
		}, b.dostart = function() {
			b.on("mousedown", b.__start)
		}, b.dostop = function() {
			b.off("mousedown");
			$(document).off("mousemove");
			$(document).off("mouseup")
		});
		b.dostart()
	}
});