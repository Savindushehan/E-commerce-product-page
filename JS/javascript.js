

var Z1=document.getElementById("z1");
var Z2=document.getElementById("z2");
var Z3=document.getElementById("z3");
var Z4=document.getElementById("z4");
var Z5=document.getElementById("z5");
var M1=document.getElementById("m1");
var M2=document.getElementById("m2");
var M3=document.getElementById("m3");
var M4=document.getElementById("m4");
var M5=document.getElementById("m5");
var D1=document.getElementById("d1");
var Num=document.getElementById("num");
var D2=document.getElementById("d2");
var BTN=document.getElementById("btn");
var CART=document.getElementById("cart");
var CART2=document.getElementById("cart2");
var P6=document.getElementById("p6");
var P1=document.getElementById("p1");
var P2=document.getElementById("p2");
var P3=document.getElementById("p3");
var P4=document.getElementById("p4");
var P5=document.getElementById("p5");
var P7=document.getElementById("p7");
var P8=document.getElementById("p8");
var i1=document.getElementById("I1");
var i2=document.getElementById("I2");
var P9=document.getElementById("p9");
var P10=document.getElementById("p10");
var P11=document.getElementById("p11");
var P12=document.getElementById("p12");
var P13=document.getElementById("p13");
var P14=document.getElementById("p14");
var P15=document.getElementById("p15");
var P16=document.getElementById("p16");
var P17=document.getElementById("p17");
var P18=document.getElementById("p18");
var P19=document.getElementById("p19");
var Body=document.getElementById("body");
var F1=document.getElementById("f1");
var FOOTER=document.getElementById("footer");
var CCC=document.getElementById("ccc");
var NEW=document.getElementById("new");
var MENU=document.getElementById("menu");





M1.onmousemove=function(){
    Z1.style.display="block";
    Z1.style.width="3.5rem";
}
M1.onmouseout=function(){
    Z1.style.display="none";
}

M2.onmousemove=function(){
    Z2.style.display="block";
    Z2.style.width="1.5rem";

}
M2.onmouseout=function(){
    Z2.style.display="none";
}

M3.onmousemove=function(){
    Z3.style.display="block";
    Z3.style.width="2.5rem";

}
M3.onmouseout=function(){
    Z3.style.display="none";
}

M4.onmousemove=function(){
    Z4.style.display="block";
    Z4.style.width="2rem";

}
M4.onmouseout=function(){
    Z4.style.display="none";
}

M5.onmousemove=function(){
    Z5.style.display="block";
    Z5.style.width="2.5rem";

}
M5.onmouseout=function(){
    Z5.style.display="none";
}
var y = 0; 

D2.onclick = function() {
    y++; 
    Num.innerHTML = y;
}

D1.onclick = function() {
    if(y!=0){
        y--; 
     Num.innerHTML = y;
    }
    else{
        return 0;
    }
}

BTN.onclick=function(){
    CART.style.display="block";
    CART2.innerHTML="$125.00 x "+y+" =$"+(125.0*y);
    P5.style.filter="opacity(50%)";
    CCC.style.display="block";
    CCC.innerHTML=y;
    i2.style.border=" 4px solid hsl(26, 100%, 55%)";
    P18.style.display="none";
    P19.style.display="none";
}
P5.onclick=function(){
    P5.style.filter="opacity(50%)";
    P6.style.filter="none";
    P7.style.filter="none";
    P8.style.filter="none";
    P1.style.display="block";
    P3.style.display="none";
    P4.style.display="none";
    P2.style.display="none";
}
P6.onclick=function(){
    P6.style.filter="opacity(50%)";
    P5.style.filter="none";
    P7.style.filter="none";
    P8.style.filter="none";
    P1.style.display="none";
    P3.style.display="none";
    P4.style.display="none";
    P2.style.display="block";
}
P7.onclick=function(){
    P7.style.filter="opacity(50%)";
    P6.style.filter="none";
    P5.style.filter="none";
    P8.style.filter="none";
    P1.style.display="none";
    P3.style.display="block";
    P4.style.display="none";
    P2.style.display="none";
}
P8.onclick=function(){
    P8.style.filter="opacity(50%)";
    P6.style.filter="none";
    P7.style.filter="none";
    P5.style.filter="none";
    P1.style.display="none";
    P3.style.display="none";
    P4.style.display="block";
    P2.style.display="none"; 
}


P1.onclick=function(){
    F1.style.display="block";
}

P2.onclick=function(){
    F1.style.display="block";
}

P3.onclick=function(){
    F1.style.display="block";
}

P4.onclick=function(){
    F1.style.display="block";
}
var Q=1;

P18.onclick=function(){
    if(Q==1){
        P13.style.filter="opacity(50%)";
        P14.style.filter="none";
        P15.style.filter="none";
        P16.style.filter="none";
        P9.style.display="block";
        P10.style.display="none";
        P11.style.display="none";
        P12.style.display="none";
        ++Q;
    }
    else if(Q==2){
        P14.style.filter="opacity(50%)";
        P13.style.filter="none";
        P15.style.filter="none";
        P16.style.filter="none";
        P10.style.display="block";
        P9.style.display="none";
        P11.style.display="none";
        P12.style.display="none";
        ++Q;

    }
    else if(Q==3){
        P15.style.filter="opacity(50%)";
        P13.style.filter="none";
        P14.style.filter="none";
        P16.style.filter="none";
        P11.style.display="block";
        P9.style.display="none";
        P10.style.display="none";
        P12.style.display="none";
        ++Q;

    }
    else if(Q==4){
        P16.style.filter="opacity(50%)";
        P13.style.filter="none";
        P14.style.filter="none";
        P15.style.filter="none";
        P12.style.display="block";
        P9.style.display="none";
        P10.style.display="none";
        P11.style.display="none";
    }

    P19.onclick=function(){
        --Q;
         if(Q==3){
            P15.style.filter="opacity(50%)";
            P13.style.filter="none";
            P14.style.filter="none";
            P16.style.filter="none";
            P11.style.display="block";
            P9.style.display="none";
            P10.style.display="none";
            P12.style.display="none";
            --Q;
    
        }
        else if(Q==2){
            P14.style.filter="opacity(50%)";
            P13.style.filter="none";
            P15.style.filter="none";
            P16.style.filter="none";
            P10.style.display="block";
            P9.style.display="none";
            P11.style.display="none";
            P12.style.display="none";
            --Q;
    
        }
        else if(Q==1){
            P13.style.filter="opacity(50%)";
            P14.style.filter="none";
            P15.style.filter="none";
            P16.style.filter="none";
            P9.style.display="block";
            P10.style.display="none";
            P11.style.display="none";
            P12.style.display="none";
        }
        else{
            return Q=1;
        }
    }
    P17.onclick=function(){
        F1.style.display="none";
    }
   
}

MENU.onclick=function(){
    M1.style.display="block";
    M1.style.position="absolute";
    M2.style.display="block";
    M2.style.position="absolute";
    M3.style.display="block";
    M3.style.position="absolute";
    M4.style.display="block";
    M4.style.position="absolute";
    M5.style.display="block";
    M5.style.position="absolute";
    M5.style.left="1rem";
    M1.style.left="1rem";
    M2.style.left="1rem";
    M3.style.left="1rem";
    M4.style.left="1rem";
    M1.style.top="4rem";
    M2.style.top="6rem";
    M3.style.top="8rem";
    M4.style.top="10rem";
    M5.style.top="12rem";
    M5.style.zIndex="5";
    M1.style.zIndex="5";
    M2.style.zIndex="5";
    M3.style.zIndex="5";
    M4.style.zIndex="5";
    NEW.style.display="block";
    P17.style.display="block";
    P17.style.position="absolute";
    P17.style.zIndex="5";
    P17.style.left="1rem";
    P17.style.top="2rem";
    P19.style.display="none";
}

P17.onclick=function(){
    NEW.style.display="none";
    P19.style.display="block";
    M1.style.display="none";
    M2.style.display="none";
    M3.style.display="none";
    M4.style.display="none";
    M5.style.display="none";
    P17.style.display="none";
}
