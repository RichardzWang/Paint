var button = document.getElementById("button"); 
var c = document.getElementById("canvas");

var getrekt = function(e){
    var x = e.clientX;
    var y = e.clientY;
    var ctx = c.getContext('2d');
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x,y,75,100);
};

c.addEventListener("click", getrekt);

button.addEventListener("click", function(){
	var m = c.getContext('2d');
	m.clearRect(0,0,c.clientWidth,c.clientHeight);	
});



