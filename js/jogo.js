let canvas = document.getElementById('desenho');
var pincel = canvas.getContext('2d');

pincel.fillStyle = '#0A3871'
pincel.strokeStyle = '#0A3871'
//forca (x, y, width, height);

function montaForca(){
    pincel.beginPath();
    pincel.fillRect(40, 400, 300, 4);
    pincel.fillRect(100, 100, 4, 300);
    pincel.fillRect(100, 100, 220, 4);
    pincel.fillRect(320, 100, 4, 30);
    pincel.stroke();
}

//corpo

//cabeça
function desenhaCabeca() {
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.arc(322, 160, 30, 0, 2 * Math.PI);
    pincel.stroke();
}

//tronco
function desenhaTronco(){
    pincel.beginPath();
    pincel.fillRect(320, 190, 4, 120);
    pincel.stroke();
}

//braço direito
function desenhaBracoDir() {
    pincel.beginPath();
    pincel.moveTo(322, 190);
    pincel.lineTo(360,250);
    pincel.stroke();
}

//braço esquerdo
function desenhaBracoEsq() {
    pincel.beginPath();
    pincel.moveTo(322, 190);
    pincel.lineTo(280,250);
    pincel.stroke();
}

//perna direita
function desenhaPernaDir() {
    pincel.beginPath();
    pincel.moveTo(360, 360);
    pincel.lineTo(322,310);
    pincel.stroke();
}

//perna esquerda
function desenhaPernaEsq() {
    pincel.beginPath();
    pincel.moveTo(280, 360);
    pincel.lineTo(322,310);
    pincel.stroke();
}
