/*下拉式導覽*/
window.onload = function(){
	var 
	getTypeElement = function(es, type){
		var esLen = es.length,
		i = 0,
		eArr = [],
		esI = null;
		for(; i < esLen; i++){
			esI = es[i];
			if(esI.nodeName.replace("#", "").toLocaleLowerCase() == type){
				eArr.push(esI);
			}
		}
		return eArr;
	},

	navs = getTypeElement(document.getElementById("pullDownNavigation").childNodes, "div"),
	i = 0,
	l = navs.length,
	targetID = null;

	for(; i < l; i++){
		navs[i].onmousemove = function(){
			targetID = this.getAttribute("data-targetID");
			document.getElementById(targetID).style.display = "block";
		}
		navs[i].onmouseout = function(){
			document.getElementById(targetID).style.display = "none";
		}
	}
	
	window.onload = getData_main('page_main.html');
};

/*伸縮式選單*/
$('div#dropdown_parer ul li ul').hide();
$('#dropdown_parer > ul > li > span').click(function(){
 $(this).next().slideToggle('slow');
});

/*分類選單*/

var isShow = false;
function changeGn() {
	if(!isShow) {
		isShow = true;
		document.getElementById('green').style.display='';
		document.getElementById('exquisite').style.display='none';
		document.getElementById('clear').style.display='none';
		document.getElementById('bright').style.display='none';
		document.getElementById('happy').style.display='none';

		var offclass = getElementsByClass('off_classify');
		for(i = 0; i < offclass.length; i++){
			offclass[i].style.background="#cce739";	
			offclass[i].style.color = '#fff';
		}

		document.getElementById('hoverGn').style.background="#fff";
		document.getElementById('hoverGn').style.color="#cce739";
		isShow = false;
	}			
}

function changeEqs() {
	if(!isShow) {
		isShow = true;
		document.getElementById('green').style.display='none';
		document.getElementById('exquisite').style.display='';
		document.getElementById('clear').style.display='none';
		document.getElementById('bright').style.display='none';
		document.getElementById('happy').style.display='none';
		
		var offclass = getElementsByClass('off_classify');
		for(i = 0; i < offclass.length; i++){
			offclass[i].style.background="#cce739";	
			offclass[i].style.color = '#fff';
		}

		document.getElementById('hoverEqs').style.background="#fff";
		document.getElementById('hoverEqs').style.color="#cce739";
		isShow = false;
	}			
}

function changeCr() {
	if(!isShow) {
		isShow = true;
		document.getElementById('green').style.display='none';
		document.getElementById('exquisite').style.display='none';
		document.getElementById('clear').style.display='';
		document.getElementById('bright').style.display='none';
		document.getElementById('happy').style.display='none';
		
		var offclass = getElementsByClass('off_classify');
		for(i = 0; i < offclass.length; i++){
			offclass[i].style.background="#cce739";	
			offclass[i].style.color = '#fff';
		}

		document.getElementById('hoverCr').style.background="#fff";
		document.getElementById('hoverCr').style.color="#cce739";
		isShow = false;
	}			
}

function changeBt() {
	if(!isShow) {
		isShow = true;
		document.getElementById('green').style.display='none';
		document.getElementById('exquisite').style.display='none';
		document.getElementById('clear').style.display='none';
		document.getElementById('bright').style.display='';
		document.getElementById('happy').style.display='none';

		var offclass = getElementsByClass('off_classify');
		for(i = 0; i < offclass.length; i++){
			offclass[i].style.background="#cce739";	
			offclass[i].style.color = '#fff';
		}
		document.getElementById('hoverBt').style.background="#fff";
		document.getElementById('hoverBt').style.color="#cce739";
		isShow = false;
	}			
}

function changeHp(){
	if(!isShow) {
		isShow = true;
		document.getElementById('green').style.display='none';
		document.getElementById('exquisite').style.display='none';
		document.getElementById('clear').style.display='none';
		document.getElementById('bright').style.display='none';
		document.getElementById('happy').style.display='';
		
		var offclass = getElementsByClass('off_classify');
		for(i = 0; i < offclass.length; i++){
			offclass[i].style.background="#cce739";	
			offclass[i].style.color = '#fff';
		}
		document.getElementById('hoverHp').style.background="#fff";
		document.getElementById('hoverHp').style.color="#cce739";
		isShow = false;
	}			
}

/*部分刷新*/
/*主要商品內容刷新*/
function getData_main(pageName){
	var req = new XMLHttpRequest();
	req.open("get", "page_html/"+pageName);
	req.onload = function(){
		var content_main = document.getElementById("main_page");
		content_main.innerHTML = this.responseText;
	};
	req.send();
}

/*影印紙內容刷新*/
function getData_photocopy(pageName){
	var req = new XMLHttpRequest();
	req.open("get", "page_html/"+pageName);
	req.onload = function(){
		var content_photocopy = document.getElementById("photocopy_page");
		content_photocopy.innerHTML = this.responseText;
	};
	req.send();
}


/*消除DIV事件*/
function clear_imagevideo(){
	document.getElementById("imgvideo").innerHTML="";
}

/*滑鼠事件*/
function mouseOver_copy(id)
{
document.getElementById(id).style.background = '#fff';
document.getElementById(id).style.color = '#cce739';
}
function mouseOut_copy(id)
{
document.getElementById(id).style.background = '#cce739';
document.getElementById(id).style.color = '#fff';
}

/*選取class name物件*/
function getElementsByClass( searchClass, domNode, tagName) {
 if (domNode == null) domNode = document;
 if (tagName == null) tagName = '*';
 var el = new Array();
 var tags = domNode.getElementsByTagName(tagName);
 var tcl = " "+searchClass+" ";
 for(i=0,j=0; i<tags.length; i++) {
  var test = " " + tags[i].className + " ";
  if (test.indexOf(tcl) != -1)
   el[j++] = tags[i];
 }
 return el;
}
