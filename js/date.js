function showDate()
{
	var today=new Date();
	var y=today.getFullYear();
	var mon=today.getMonth();
	var d=today.getDate();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	var week=today.getDay();
	switch(week)
	{
		case 0:week="星期日";break;
		case 1:week="星期一";break;
		case 2:week="星期二";break;
		case 3:week="星期三";break;
		case 4:week="星期四";break;
		case 5:week="星期五";break;
		case 6:week="星期六";break;
	}
	m=checkTime(m);
	s=checkTime(s);
			document.getElementById("txt1").innerHTML="今天是"+y+"年"+mon+"月"+d+"日，"+week+"，北京时间："+h+":"+m+":"+s;
			var specialDate=new Date("2022,2,4");
			var intervalDate=specialDate.getTime()-today.getTime();
			var intervalDay=intervalDate/(1000*60*60*24);
			intervalDay=Math.floor(intervalDay);
			document.getElementById("txt2").innerHTML="距离北京冬奥会开幕还有<font color='#28A4C9'>"+intervalDay+"</font>天";
			t=setTimeout('showDate()',500);
}
function checkTime(i)
{
	if(i<10)
	i="0"+i;
	return i;
}
function checkLength(which) {
	var maxChars = 20; //
	if(which.value.length>maxChars){
		alert("字数超过限制，20个以内!");
		// 超过限制的截取
		which.value=which.value.substring(0,maxChars);
		return false;
	}else{
		document.getElementById("remain").innerHTML=maxChars-which.value.length;
		return true;
	}
}
function submitFun(){
	text=document.getElementById("textAreal");
	if(text=null)
	{alert("发表留言失败");}
	else
	{alert("发表留言成功");}
	}