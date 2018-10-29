alert("this is my first example with javascript");

var shape = prompt("1: Circle\n2: Rectangle\n3: Trapazoid");

if (shape == "1") circle();

if (shape == "2") rectangle();

if (shape == "3") trap();

function circle() {
    var radius = prompt("What is the radius?");
    var answer = (Math.pow(radius, 2)) * Math.PI;
    alert("the area is " + answer);
}

function rectangle() {
    var height = prompt("What is the height?");
    var width = prompt("What is the width?");
    alert("the area is " + height*width);
}

function trap(){
    var trap_sides = prompt("What is the width?");
    var trap_height = prompt("What is the height?");
    alert("the area is " + trap_sides*trap_height)
}

var login = prompt("what is the message?");
var msg;
if (login == 'student') {
	msg = 'HI';
}
else if (login == 'faculty') {
	msg = 'Greetings';
}
else if (login == '') {
	msg = 'No login';
}
else {
	msg = '';
}
alert(msg);


var login = prompt("what is the message?");
var msg;
if (login == 'student') {
	msg = 'HI';
}
else if (login == 'faculty') {
	msg = 'Greetings';
}
else if (login == '') {
	msg = 'No login';
}
else {
	msg = '';
}

alert(msg);