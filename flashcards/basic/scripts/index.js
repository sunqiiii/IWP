document.getElementById('p1').ondrag = function() {
let ele = document.getElementById('p1');
ele.innerHTML = 'I have been dragged! Alert the police!'; 
}
document.getElementById('p2').onmousedown = function() {
let ele = document.getElementById('p2');
ele.innerHTML = 'I have been clicked! Alert the police!'; 
}
document.getElementById('p3').onmouseup = function() {
let ele = document.getElementById('p3');
ele.innerHTML = 'I have been clicked! Alert the police!'; 
}
document.getElementById('p4').onmouseover = function() {
let ele = document.getElementById('p4');
ele.innerHTML = 'Stop hovering! Alert the police!'; 
}
