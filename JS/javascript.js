

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







M1.onmousemove=function(){
    Z1.style.display="block";
    Z1.style.width="3.5rem";
    Z1.style.margin=0;
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
    CART2.innerHTML="$125.00 x "+y+" = "+(125.0*y);
    P5.style.filter="opacity(50%)";
    i2.style.border=" 4px solid hsl(26, 100%, 55%)";
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
    Body.style.backgroundColor=" hsl(0, 0%, 100%)";
    Body.style.opacity="99%";
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

    P9.onclick=function(){
        F1.style.display="block";
        F1.style.backgroundColor="black";
        Body.style.filter="opacity(50%)";
    }
}