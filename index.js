var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
		    
var bird_1='https://i.ibb.co/DkW7qrs/Bird-1.png';
var bird_2='https://i.ibb.co/LRfyQ18/Bird-2.png';
var bird_dead='https://imgur.com/download/beMAg0Q';
var flr={
   	x:0,
   	y:canvas.height-30,
   	height:canvas.height/15,
	width:canvas.width,
 };
var bow_1='https://i.ibb.co/9q2wgPg/teer.png';
var bow_2='https://i.ibb.co/p1VT6H1/teerbandh.png';
var arrow_1 ='https://i.ibb.co/TBPf6n8/Arrow.png';
var bg_music= 'https://vocaroo.com/media_command.php?media=s0AFwmg1w0WX&command=download_mp3';
var en1=1;
var att=0;
var u=1;
var iter=true;
var yo=0;
var score=0;
var arrs=10;
var Scr=document.getElementById("score");
Scr.innerHTML="Score: "+score;
var Arrs=document.getElementById("arrows");
Scr.innerHTML="Remaining Arrows: "+arrs;
var m=1;//m=1 wallpapaer m=0 for game
		    
