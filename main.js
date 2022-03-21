$(document).ready(function(){


    function loading(){
        $(".intro").css({"visibility":"hidden"});
    }
    window.setTimeout(loading, 3000);



    $(".mob-nav-toggle").click(function(){
        const nav = $(".navigation").attr("data-visible");
        if (nav=='false'){
            $(".navigation").attr("data-visible",'true');
            $(".mob-nav-toggle").attr("aria-expanded",'true');
        } else{
            $(".navigation").attr("data-visible",'false');
            $(".mob-nav-toggle").attr("aria-expanded",'false');
        }
    })


    $(".box input").focus(function(){
        $(".box label").css({"transform": "translateX(1vw) translateY(-3vw)", "background":"#0c0c0c", "transition":"150ms"});
    })

      



    var windowWidth = window.innerWidth;

        if(windowWidth>720){

            window.addEventListener('mousemove',function(e){



                /*not needed
                this.document.getElementById('y-max').textContent = this.window.innerHeight;
                this.document.getElementById('x-max').textContent = this.window.innerWidth;
                this.document.getElementById('x-value').textContent = e.x;
                this.document.getElementById('y-value').textContent = e.y;
                till here*/
        
        
        
        
        
        
                var distance;
                var width2,width1;
                var bgw1,bgw2;
                var scale2,scale1;
                var opacity;
                var x = e.x;
                var xmax = this.window.innerWidth;
        
                if (x>(xmax/2)){
                    distance = ((x-(xmax/2))*50)/(xmax/2);
        
        
                width2 = 50-distance;
                $(".image2").width(width2+"%");
                width1 = 50+distance;
                $(".image1").width(width1+"%");
        
                scale2 = 50/width2;
                scale1 = 50/width1;
        
                bgw2 = 200*scale2;
                $(".image2").css("background-size", bgw2 +"% 100%");
                bgw1 = 200*scale1;
                $(".image1").css("background-size", bgw1 +"% 100%");
        
                $(".image1").css("left",width2 +"%");
        
                opacity = 100-distance*2*1.65;
                $(".mech").css("opacity",opacity+"%");
        
            }
            if (x<(xmax/2)){
                distance = (((xmax/2)-x)*50)/(xmax/2);
        
        
                width1 = 50-distance;
                $(".image1").width(width1+"%");
                width2 = 50+distance;
                $(".image2").width(width2+"%");
        
                scale2 = 50/width2;
                scale1 = 50/width1;
        
                bgw2 = 200*scale2;
                $(".image2").css("background-size", bgw2 +"% 100%");
                bgw1 = 200*scale1;
                $(".image1").css("background-size", bgw1 +"% 100%");
        
                $(".image1").css("left",width2 +"%");
        
                opacity = 100-distance*2*1.65;
                $(".frnt").css("opacity",opacity+"%");
        
            }
        
            
            
        })
        
    }











})