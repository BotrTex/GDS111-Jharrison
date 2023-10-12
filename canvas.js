console.log('I am inside Canvas.js'); //communicates with HTML and JS for Canvas
var canvas = document.querySelector('canvas'); //defines Canvas
canvas.width = window.innerWidth; //sets Canvas Width
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100); // creating rectangles
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(500, 500, 200, 200);