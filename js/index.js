var gb = document.getElementsByClassName("gb")[0];
var nav = document.getElementsByClassName("top_nav")[0];
var siteNavCity = document.querySelector(".site-nav-city");
var siteNavSend = document.querySelector(".site-nav-send");
var wd = document.querySelector(".nav_box li:nth-child(6) a");
var wdBox = document.querySelector(".nav_box li:nth-child(6) div");
var qyBox = document.querySelector(".nav_box li:nth-child(10) div");
var qy = document.querySelector(".nav_box li:nth-child(10) a");
var khBox = document.querySelector(".top_banner li:nth-child(12) div");
var kh = document.querySelector(".nav_box li:nth-child(12) a");
var wz = document.querySelector(".top_banner li:nth-child(14) a");
var wzBox = document.querySelector(".top_banner li:nth-child(14) div");
var sjBox = document.querySelector(".top_banner li:nth-child(16) div");
var sj = document.querySelector(".top_banner li:nth-child(14) a");

gb.onclick=function (){
	nav.style.display="none";
}
siteNavCity.onmouseover = function (){
	siteNavSend.className = "mr";
}
siteNavCity.onmouseout = function (){
	siteNavSend.className = "site-nav-send";
}
wdBox.onmouseover = function (){
	wd.classList.add("mr_one");
	
}
wdBox.onmouseout = function (){
	wd.classList.remove("mr_one")
}
qyBox.onmouseover = function (){
	qy.classList.add("mr_one");
	
}
qyBox.onmouseout = function (){
	qy.classList.remove("mr_one")
}
khBox.onmouseover = function (){
	kh.classList.add("mr_one");
	
}
khBox.onmouseout = function (){
	kh.classList.remove("mr_one")
}
wzBox.onmouseover = function (){
	wz.classList.add("mr_one");
	
}
wzBox.onmouseout = function (){
	wz.classList.remove("mr_one") 
}

