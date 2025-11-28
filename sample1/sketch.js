function setup() {
  createCanvas(600, 400);
  background('#778899');
}

function draw() {
  
  //좌상단 선 4개 
  stroke('#2F4F4F');
  strokeWeight(8);
  line(0, 50, 70, 0);
  line(0, 80, 112, 0);
  line(0, 110, 154, 0);
  line(0, 140, 196, 0);
  
  //하얀 원 3개
  strokeWeight(0);
  fill('#F5F5F5');
  circle(150, 150, 100, 100);
  stroke('#D3D3D3');
  strokeWeight(7);
  noFill();
  circle(180, 130, 100, 100);
  strokeWeight(0);
  fill('#A9A9A9');
  circle(220, 120, 100, 100);
  
  //노란 원 3개
  stroke('#FFF8DC');
  strokeWeight(7);
  noFill();
  circle(65, 250, 100, 100);
  strokeWeight(0);
  fill('#F0E68C');
  circle(85, 270, 100, 100);
  stroke('#DAA520');
  strokeWeight(7);
  noFill();
  circle(115, 300, 100, 100);
  
  //좌측 상단 팩맨
  strokeWeight(0);
  fill('#FFA07A');
  arc(70, 80, 100, 120, radians(110), radians(345), PIE);
  
  stroke(255);
  strokeWeight(15);
  point(95, 53);
  
  stroke(0);
  strokeWeight(10);
  point(95, 53);
  
  fill(255);
  strokeWeight(0);
  arc(51, 132, 13, 7, radians(280), radians(120));
  arc(54, 125, 13, 7, radians(280), radians(120));
  arc(116, 68, 7, 13, radians(344), radians(168));
  arc(109, 70, 7, 13, radians(344), radians(168));
  
  //중간맨팩맨
  strokeWeight(0);
  fill('#9ACD32');
  arc(350, 115, 150, 180, radians(220), radians(140),PIE);
  
  stroke(255);
  strokeWeight(20);
  point(330, 60);
  
  stroke(0);
  strokeWeight(13);
  point(330, 60);
  
  fill(255);
  strokeWeight(0);
  arc(293, 163, 11, 15, radians(140), radians(320));
  arc(302, 155, 11, 15, radians(140), radians(320));
  arc(294, 68, 11, 15, radians(40), radians(220));
  arc(303, 76, 11, 15, radians(40), radians(220));
  
  //삼각형 사이 선
  stroke('#FFC0CB');
  strokeWeight(13);
  line(190, 240, 360, 330);
  
  //하단 타원형
  stroke(255);
  strokeWeight(7);
  fill('#2F4F4F');
  ellipse(235, 360, 120, 50);
  
  //하단 삼각형 2개
  stroke('#8B4513');
  strokeWeight(3);
  fill('#AFEEEE');
  triangle(190, 280, 320, 250, 255, 320);
  strokeWeight(5);
  fill('#6495ED');
  triangle(330, 380, 360, 230, 390, 360);
  
  //우측 상단 선 2개
  stroke(255);
  strokeWeight(3);
  line(460, 30, 580, 80);
  strokeWeight(7);
  line(470, 140, 570, 20);
  
  //우측 상단 중 꽃같은 원 4개
  stroke('#D8BFD8');
  strokeWeight(20);
  point(483, 70);
  point(470, 57);
  point(470, 83);
  point(457, 70);
  
  //우측 상단 중 아래 원
  stroke('#9370DB');
  strokeWeight(28);
  point(545, 110);
  
  //우측 상단 중 우측 원
  stroke('#DA70D6');
  strokeWeight(18);
  point(575, 55);
  
  //우측 상단 중 위 원
  stroke('#483D8B');
  strokeWeight(33);
  point(525, 25);
  
  //우측 하단 사각형들(빨강, 노랑, 파랑, 하양, 초록)
  rectMode(CORNERS);
  strokeWeight(3);
  stroke(80);
  fill('#FF0000');
  rect(410, 260, 600, 400);
  fill('#FFFF00');
  rect(500, 200, 600, 400);
  fill('#0000FF');
  rect(450, 280, 600, 400);
  fill(255);
  rect(520, 240, 600, 400);
  fill('#008000');
  rect(480, 300, 600, 400);
  
}