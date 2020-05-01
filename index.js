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


	//objects of game
            
            var bird = new Thing(bird_2,canvas.width,10);
            var bow = new Thing(bow_1,10,canvas.height-500);
            var arrow = new Thing(arrow_1,10,10);
		    var gameSound= new sound(bg_music);
		    var bow1 = new Thing(bow_1,10,10);
            var arrow1 = new Thing(arrow_1,10,200);
            var bird1 = new Thing(bird_1,canvas.width-150,10);

	//functions of game
            
            
            var a=0;
            var g=0;
            var angleInDegrees=-35;
                
            function anime()
            {
                if(m==1)
                {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(bird.img,bird.x,bird.y);
                Draw.drawRotatedB(angleInDegrees, bow.img, canvas);
                Draw.floor(flr.x,flr.y,flr.width,flr.height,'black');
                Draw.drawRotatedA(angleInDegrees, arrow.img, canvas);
                a++;
                bird.x-=5;
                
                if(a>=30)
                {
                    a=0;
                    g++;
                    if(g%2==0)
                    {
                        bird.img.src=bird_1;
                    }
                    else
                    {
                        bird.img.src=bird_2;
                    }
                }
                
                if(bird.x<=-100)
                {
                    bird.x=canvas.width;
                    bird.y=forRandom.rand();
                    //console.log(bird.y);
                }
                }
                
            }
            
            var elem1=document.getElementById("f11");
            
            document.addEventListener('keydown', function(event) 
            {
                //Attack
                if(event.keyCode==32 && en1 == 1 && arrs>0) 
                {
                    en1=0;
                    att=30;
                    bow1.img.src=bow_2;
                    bow1.x=100;
                }
            });
            function fullScreen()
            {
            	canvas.style.width=screen.width +"px";
                canvas.style.height=screen.height + "px";
                if (elem1.requestFullscreen) 
		        {
                    elem1.requestFullscreen();
                }
                else if (elem1.mozRequestFullScreen) 
                { 
                    /* Firefox */
                    elem1.mozRequestFullScreen();
                }
                else if (elem1.webkitRequestFullscreen) 
                { 
                    /* Chrome, Safari & Opera */
                    elem1.webkitRequestFullscreen();
                }
                else if (elem1.msRequestFullscreen) 
                {   
                    /* IE/Edge */
                    elem1.msRequestFullscreen();
                }
                
                document.body.style.backgroundColor = "white";
                
            }
            var r;
            function start()
            {
                m=1;
                fullScreen();
                document.getElementById("before").style.display="none";
                document.getElementById("wallpaper").style.display="block";
                document.getElementById("buttons").style.display="block";
                document.getElementById("name").style.display="block";
                gameSound.play();
                document.body.style.backgroundColor = "white";
                document.getElementById("back").style.display="none";
                r=setInterval(anime,10);
            }
            var g;
            function play()
            {
                m=0;
                Scr.style.display="block";
                Arrs.style.display="block";
                gameSound.stop();
                document.getElementById("buttons").style.display="none";
                document.getElementById("name").style.display="none";
                document.getElementById("back").style.display="block";
                clearInterval(r);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                g=setInterval(game,10);
                
            }
            var b=0;
            function game()
            {
                if(m==0)
                {
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.drawImage(bow1.img , bow1.x , bow1.y);
                ctx.drawImage(arrow1.img , arrow1.x , arrow1.y, 350 ,15);
                ctx.drawImage(bird1.img, bird1.x, bird1.y);
                Scr.innerHTML="Score: "+score;
                Arrs.innerHTML="Remaing Arrows: "+arrs;
                a++;
                if(a>=30)
                {
                    a=0;
                    g++;
                    if(g%2==0)
                    {
                        bird1.img.src=bird_1;
                    }
                    else
                    {
                        bird1.img.src=bird_2;
                    }
                }
		        if(u>0)
		        {
			        bird1.y+=5;
			        if(bird1.y>=700)
			        {
				        u=0;
			        }
		        }      
		        else
		        {
			        bird1.y-=5;
			        if(bird1.y<=100)
			        {
				        u=1;
			        }
		
	        	}
		
	            if(en1==0)
                {
                    arrow1.x+=30;
                    att--;
			
                }
                if(att<=0)
                {
                    bow1.img.src=bow_1;
                    bow1.x=10;
                }
                if(arrow1.x>canvas.width)
                {
                    arrow1.x=10;
                    en1=1;
                    b=0;
                    arrs-=1;
                }
                if((arrow1.x+250)>=bird1.x && (arrow1.x+150)<=bird1.x && (arrow1.y+5)>bird1.y && (arrow1.y+5)<(bird1.y+103))
                {
			        bird1.img.src=bird_dead;
			        yo=0;
                    b++;
                    if(b==1)
                    {
			        	score+=1;
                    }
                }
                }
            }
            
            function back()
            {
                m=1;
				score=0;
				arrs=10;
                Scr.style.display="none";
                Arrs.style.display="none";
                document.getElementById("wallpaper").style.display="block";
                document.getElementById("buttons").style.display="block";
                document.getElementById("name").style.display="block";
                gameSound.play();
                document.getElementById("back").style.display="none";
                clearInterval(g);
                ctx.clearRect(0,0,canvas.width,canvas.height);
                r=setInterval(anime,10);
            }
    
