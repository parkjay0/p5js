// 눈동자 위치 변수
let eyeLX = 265;  // 왼쪽 눈동자 x
let eyeRX = 335;  // 오른쪽 눈동자 x
let eyeY  = 170;  // 눈동자 y (고정)


function setup() {
  createCanvas(600, 400);
}  
  
function draw() {
  
  background('#CCFFFF');

  // 머리카락
  fill(0);
  noStroke();
  rectMode(CORNER);
  arc(300, 225, 235, 383, PI, 0);
  rect(182.5, 225, 235, 150, 0, 0, 20, 20);

  // 얼굴
  fill('#FFEBD6');
  noStroke();
  ellipse(300, 160, 175, 240);
  
  // 귀
  arc(213, 173, 30, 50, radians(70), radians(280), OPEN);
  arc(387, 173, 30, 50, radians(260), radians(110), OPEN);
  
  stroke('#FFD9B3');
  strokeWeight(4);
  line(205, 170, 207, 182);
  line(395, 170, 393, 182);

   // 앞머리
  let x2 = 300, y2 = 40 ;
  
  noFill();
  stroke(0);
  strokeWeight(11);
  curve(520, 300, x2, y2, 210, 160, 400, 200);
  curve(500, 200, x2, y2, 210, 155, 400, 5);
  curve(480, 150, x2, y2, 220, 150, 400, 0);
  curve(460, 35, x2, y2, 230, 145, 400, 5);
  curve(440, 35, x2, y2, 240, 140, 400, 5);
  curve(420, 35, x2, y2, 260, 140, 400, 5);
  curve(400, 35, x2, y2, 280, 140, 400, 5);
  curve(380, 35, x2, y2, 300, 140, 400, 5);
  curve(360, 35, x2, y2, 320, 140, 400, 5);
  curve(340, 35, x2, y2, 340, 140, 400, 5);
  curve(340, 200, x2+5, y2, 350, 145, 420, 100);
  curve(340, 200, x2+5, y2, 360, 150, 366, 200);
  curve(200, 50, x2+5, y2, 360, 150, 366, 260);
  curve(200, 50, x2+5, y2, 360, 150, 366, 300);
  curve(200, 50, x2+5, y2, 363, 150, 366, 400);
  curve(200, 50, x2+5, y2, 370, 153, 366, 400);
  curve(200, 150, x2+5, y2, 375, 155, 366, 400);
  curve(200, 200, x2+5, y2, 380, 157, 366, 400);
  curve(200, 250, x2+5, y2, 390, 160, 366, 500);


  // 눈 흰자(배경)
  noStroke();
  strokeWeight(1);
  fill(255);
  ellipse(265, 170, 45, 30);
  ellipse(335, 170, 45, 30);
  
  // 눈동자
  fill('#1A0000');
  noStroke();
  ellipse(eyeLX, eyeY, 20, 25);
  ellipse(eyeRX, eyeY, 20, 25);
  
  fill(255);
  circle(eyeLX-1, eyeY-3, 5);
  circle(eyeRX-1, eyeY-3, 5);
  
  // 눈 윗라인
  noFill();
  stroke(0);
  strokeWeight(3);
  arc(264, 170, 50, 30, radians(185), radians(350));
  arc(336, 170, 50, 30, radians(190), radians(355));
  
  // 눈 아랫라인
  noFill();
  strokeWeight(2);
  arc(264, 170, 55, 30, radians(30), radians(145));
  arc(336, 170, 55, 30, radians(35), radians(150));
  
  // 쌍꺼풀
  strokeWeight(2);
  arc(262, 170, 57, 35, radians(186), radians(350));
  arc(338, 170, 57, 35, radians(190), radians(354));
  
  // 속눈썹
  strokeWeight(2);
  line(233, 160, 240, 165);
  line(238, 154, 245, 160);
  line(366, 160, 359, 165);
  line(361, 154, 354, 160);
  
  // 코
  stroke(0);
  strokeWeight(2);
  line(300, 190, 295, 210);
  line(295, 210, 305, 215);
  
  // 입
  fill('#FF6666');
  noStroke();
  arc(300, 230, 60, 50, 0, PI);
  
  // 귀걸이
  stroke('#999900');
  strokeWeight(5);
  point(210, 192);
  point(390, 192);
  
  // 옷
  let clothColor;

  if (mouseIsPressed) {
    let r = random(200);
    let g = random(200);
    let b = random(200);
    clothColor = color(r, g, b);
  } else {
    clothColor = color('#331919');
  }

  fill(clothColor);
  noStroke();
  rectMode(CENTER);
  rect(300, 350, 256, 100, 40, 40, 0, 0);
  
  stroke('#260F00');
  strokeWeight(2);
  line(300, 335, 300, 399);
  
  stroke('#663300');
  strokeWeight(8);
  point(300, 350);
  point(300, 368);
  point(300, 386);
  
  stroke('#260F00');
  strokeWeight(3);
  point(300, 350);
  point(300, 368);
  point(300, 386);
  
  stroke('#260F00');
  strokeWeight(2);
  line(218, 365, 218, 399);
  line(382, 365, 382, 399);
  
  // 목
  fill('#FFEBD6');
  noStroke();
  rectMode(CENTER);
  rect(300, 280, 55, 40);
  triangle(272.5, 300, 327.5, 300, 300, 330);
}


function keyPressed() {
  
  // 흰자 안 범위 제한
  eyeLX = constrain(eyeLX, 265-12, 265+12);
  eyeRX = constrain(eyeRX, 335-12, 335+12);
  
  if (keyCode === LEFT_ARROW) {
    eyeLX -= 5;
    eyeRX -= 5;
  } else if (keyCode === RIGHT_ARROW) {
    eyeLX += 5;
    eyeRX += 5;
  }

 else if (key === 's') {
    saveGif('초상화 움직임2', 10);
  }
  
}