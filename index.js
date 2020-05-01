var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

//variables
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
var m=1;
//m=1 wallpapaer m=0 for game


//classes
		    
class Thing
{
    img;
    x;
    y;
    constructor(src,x,y)
     {
        this.img=new Image();
        this.img.src=src;
        this.x=x;
        this.y=y;
     }
                setWidth(width)
                {
                    this.img.width=100+"px";
                }
            }
            
            class sound
            {
                sound;
                constructor(src)
                {
                    this.sound=document.createElement('audio');
                    this.sound.src=src;
                    this.sound.setAttribute("preload","auto");
                    this.sound.setAttribute("controls","none");
                    this.sound.style.display="none";
                }
                play()
                {
                    this.sound.play();
                }
                stop()
                {
                    this.sound.pause();
                }
                decVol()
                {
                	if(this.volume>=0)
                    {
                		this.volume-=20;
                    }
                }
                incVol()
                {
                	if(this.volume<=100)
                    {
                		this.volume+=20;
                    }
                }
            }
            
            
            class Draw
		    {
		        static floor(x,y,width,height,color)
		        {
		            ctx.beginPath();
		            ctx.rect(x,y,width,height);
		            ctx.fillStyle=color;
		            ctx.fill();
		            ctx.closePath();
		        }
		        
		        static drawRotatedB(degrees,image,canvas)
		        {
                    ctx.save();
                    ctx.translate(100,canvas.height-200);
                    ctx.rotate(degrees*Math.PI/180);
                    ctx.drawImage(image,-image.width/2,-image.width/2);
                    ctx.restore();
                }
                
                static drawRotatedA(degrees,image,canvas)
		        {
                    ctx.save();
                    ctx.translate(-455,65);
                    ctx.rotate(degrees*Math.PI/180);
                    ctx.drawImage(image,0,canvas.height,400,15);
                    
                    ctx.restore();
                }
		        
		    }
            
            
            class forRandom
		    {
		        n;
		        static rand()
		        {
		            this.n=Math.ceil(Math.random()*500);
                    if(this.n>=10)
                    {
                        return this.n;
                    }
                    return null;
		        }
		    }
		    
