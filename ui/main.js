console.log('Loaded!');

//Change the text of the main-text 
var element = document.getElementById ('main-text');


element.innerHtml = 'Gangassault'


var img = document.getElementById ('madi');
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function (){
    var interval = setInterval(moveRight, 100);
};