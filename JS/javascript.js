

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





M1.onmousemove=function(){
    Z1.style.display="block";
    Z1.style.margin=0;
}
M1.onmouseout=function(){
    Z1.style.display="none";
}

M2.onmousemove=function(){
    Z2.style.display="block";
}
M2.onmouseout=function(){
    Z2.style.display="none";
}

M3.onmousemove=function(){
    Z3.style.display="block";
}
M3.onmouseout=function(){
    Z3.style.display="none";
}

M4.onmousemove=function(){
    Z4.style.display="block";
}
M4.onmouseout=function(){
    Z4.style.display="none";
}

M5.onmousemove=function(){
    Z5.style.display="block";
}
M5.onmouseout=function(){
    Z5.style.display="none";
}
var y = 0; // Declare y outside the function

D2.onclick = function() {
    y++; // Increment y
    Num.innerHTML = y;
}

D1.onclick = function() {
    if(y!=0){
        y--; // Decrement y
     Num.innerHTML = y;
    }
    else{
        return 0;
    }
}

BTN.onclick=function(){
    CART.style.display="block";
    CART2.innerHTML="$125.00 x "+y+" "+(125.0*y);
    P6.style.filter="opacity(50%";
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