console.log('Loaded!');

//Change the text of the main-text 
var element = document.getElementById ('main-text');


element.innerHtml = 'Gangassault'


var img = document.getElementById ('madi');
img.onClick = function (){
    var interval = setInterval(moveRight, 100);
};