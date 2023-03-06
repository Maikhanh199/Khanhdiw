var trigger=document.getElementById("triggerbg");
var cover=document.getElementsByClassName("cover");
trigger.onmouseover=function(){
for (var i = cover.length-1; i >= 0; i--) {
   cover[i].className="hovered";
}
cover=document.getElementsByClassName("hovered");
}
trigger.onmouseout=function(){
for (var i = cover.length-1; i >= 0; i--) {
   cover[i].className="cover";
}
cover=document.getElementsByClassName("cover");
}