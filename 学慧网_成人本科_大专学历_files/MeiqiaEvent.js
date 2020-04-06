//Page technology provided by negroup.cn, rights reserved!
//Author: FQZ 2016-8-6

/*(function(m, ei, q, i, a, j, s) {
    m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
    j = ei.createElement(q),
        s = ei.getElementsByTagName(q)[0];
    j.async = true;
    j.charset = 'UTF-8';
    j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
    s.parentNode.insertBefore(j, s);
})(window, document, 'script', '_MEIQIA');
_MEIQIA('entId', 111037); //FQZ:This the meiqia counts code ,Don't delect!!!

//var Boxstatus = 1,
//	BoxHeight = 0,
//	BtnHeight = 0; //Visitors click on the Advisory button state
//function getScrollTop() {
//	var scrollPos;
//	if(window.pageYOffset) {
//		scrollPos = window.pageYOffset;
//	} else if(document.compatMode && document.compatMode != 'BackCompat') {
//		scrollPos = document.documentElement.scrollTop;
//	} else if(document.body) {
//		scrollPos = document.body.scrollTop;
//	}
//	return scrollPos;
//}
//this function to web use.
function meiqiaclick() {
	//window.open("http://p.qiao.baidu.com/im/index?siteid=9532591&ucid=3869903&cp=&cr=&cw=");
	//	_MEIQIA._SHOWPANEL({
	//		groupToken: 'dbca3bcd4dd9c84099dd47f3a664c882'  //FQZ:This yuanda group to one.
	//	});
	_MEIQIA('showPanel', {
		//groupToken: 'dbca3bcd4dd9c84099dd47f3a664c882'
	});
//	_MEIQIA('metadata', {
//		name: '人力项目', // 美洽默认字段
//		address: '北京', // 美洽默认字段
//		deivies: 'pc', // 自定义字段
//		btn: '学费1980' // 自定义字段
//	});
}

//function Btnstate() {
//	BoxHeight = getScrollTop();
//	if(BoxHeight-BtnHeight>200&&Boxstatus>1)
//      {
//      	meiqiahide();
//      }
//      else if(BoxHeight-BtnHeight<-200&&Boxstatus>1){
//      	meiqiahide();
//      }
//}

function meiqiahide() {
	_MEIQIA('hidePanel'); //Hide Meichat chat box 
}
$(document).ready(function() {
	$('#MeiqiaBtn').click(function() {
		meiqiaclick(); //FQZ: when the page elements are more complex, use the jQuery selector to select the element ID
	});
	$('.MeiqiaCss').click(function() {
		meiqiaclick(); //FQZ: when the page elements are more complex, use the jQuery selector to select the element class
	});

});*/
document.write('<script type="text/javascript" data-lxb-uid="21977940" data-lxb-gid="329493" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"></scr' + 'ipt>' ); 

