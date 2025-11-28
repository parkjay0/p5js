//좌측 상단 팩맨
let px1 = 70;
let py1 = 80;
let pvx1, pvy1;

//중간 팩맨
let px2 = 350;
let py2 = 115;
let pvx2, pvy2;

//하얀 원 3개
let wx = [150, 180, 220];
let wy = [150, 130, 120];
let wSize = [100, 100, 100];
let wGrow = [];

//노란색 원 3개
let yx = [65, 85, 115];
let yy = [250, 270, 300];
let ySize = [100, 100, 100];
let yGrow = [];

//우측 하단 네모
let squ1, squ2, squ3, squ4, squ5;


function setup() {
  createCanvas(600, 400);
  
  pvx1 = random(-2, 2);
  pvy1 = random(-2, 2);
  pvx2 = random(-2, 2);
  pvy2 = random(-2, 2);
  
  squ1 = color(255, 0, 0);
  squ2 = color(0, 255, 0);
  squ3 = color(0, 0, 255);
  squ4 = color(255);
  squ5 = color(0, 128, 0); 
  
  for (let i = 0; i < 3; i++) {
    wGrow[i] = random(0.5, 1.5);
  }
  
  for (let i = 0; i < 3; i++) {
  yGrow[i] = random(0.5, 1.5);
  }
}


function draw() {
  background('#778899');
  
  //좌상단 선 4개
  push();
  stroke('#2F4F4F');
  strokeWeight(8);
  line(0, 50, 70, 0);
  line(0, 80, 112, 0);
  line(0, 110, 154, 0);
  line(0, 140, 196, 0);
  pop();
  
  
  //하얀 원 3개
  for (let i = 0; i < 3; i++) {
    wSize[i] += wGrow[i];
    
    if (wSize[i] > 140 || wSize[i] < 60) {
      wGrow[i] *= -1;
    }
  }
  push();
  fill('#F5F5F5');
  strokeWeight(0);
  circle(wx[0], wy[0], wSize[0]);
  
  noFill();
  stroke('#D3D3D3');
  strokeWeight(7);
  circle(wx[1], wy[1], wSize[1]);
  
  fill('#A9A9A9');
  strokeWeight(0);
  circle(wx[2], wy[2], wSize[2]);
  pop();
  

  //노란 원 3개
  for (let i = 0; i < 3; i++) {
    ySize[i] += yGrow[i];

    if (ySize[i] > 120 || ySize[i] < 30) {
      yGrow[i] *= -1;
    }
  }
  
  push();
  noFill();
  stroke('#FFF8DC');
  strokeWeight(7);
  circle(yx[0], yy[0], ySize[0]);
  
  fill('#F0E68C');
  strokeWeight(0);
  circle(yx[1], yy[1], ySize[1]);
  
  noFill();
  stroke('#DAA520');
  strokeWeight(7);
  circle(yx[2], yy[2], ySize[2]);
  pop();
  
  
  //삼각형 사이 선
  push();
  stroke('#FFC0CB');
  strokeWeight(13);
  line(190, 240, 360, 330);
  pop();
  
  
 //하단 타원형
  push();
  stroke(255);
  strokeWeight(7);
  fill('#2F4F4F');
  ellipse(235, 360, 120, 50);
  pop();
  
  
  //하단 삼각형 2개
  push();
  stroke('#8B4513');
  strokeWeight(3);
  fill('#AFEEEE');
  triangle(190, 280, 320, 250, 255, 320);
  strokeWeight(5);
  fill('#6495ED');
  triangle(330, 380, 360, 230, 390, 360);
  pop();
  
  
  //우측 상단 선 2개
  stroke(255);
  strokeWeight(3);
  line(460, 30, 580, 80);
  strokeWeight(7);
  line(470, 140, 570, 20);
  
  
  //우측 상단 중 꽃 같은 원 4개
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
  
  
  //좌측 상단 팩맨
  px1 += pvx1;
  py1 += pvy1;
  
  let pmMargin = 70;
  if (px1 < pmMargin || px1 > width/1.5 - pmMargin) {
    pvx1 *= -1;
  }
  if (py1 < pmMargin || py1 > height - pmMargin) {
    pvy1 *= -1;
  }

  strokeWeight(0);
  fill('#FFA07A');
  arc(px1, py1, 100, 120, radians(110), radians(345), PIE);
  
  stroke(255);
  strokeWeight(15);
  point(px1 + 25, py1 - 27);
  stroke(0);
  strokeWeight(10);
  point(px1 + 25, py1 - 27);
  
  fill(255);
  strokeWeight(0);
  arc(px1 - 19, py1 + 52, 13, 7, radians(280), radians(120));
  arc(px1 - 16, py1 + 45, 13, 7, radians(280), radians(120));
  arc(px1 + 46, py1 - 12, 7, 13, radians(344), radians(168));
  arc(px1 + 39, py1 - 10, 7, 13, radians(344), radians(168));
  
  
  //중간 팩맨
  px2 += pvx2;
  py2 += pvy2;

  let pmMargin2 = 80;
  if (px2 < pmMargin2 || px2 > width/1.1 - pmMargin2) {
  pvx2 *= -1;
  }
  if (py2 < pmMargin2 || py2 > height - pmMargin2) {
  pvy2 *= -1;
  }
  
  strokeWeight(0);
  fill('#9ACD32');
  arc(px2, py2, 150, 180, radians(220), radians(140),PIE);
  
  stroke(255);
  strokeWeight(20);
  point(px2 - 20, py2 - 55);
  stroke(0);
  strokeWeight(13);
  point(px2 - 20, py2 - 55);
  
  fill(255);
  strokeWeight(0);
  arc(px2 - 57, py2 + 48, 11, 15, radians(140), radians(320));
  arc(px2 - 48, py2 + 40, 11, 15, radians(140), radians(320));
  arc(px2 - 56, py2 - 47, 11, 15, radians(40), radians(220));
  arc(px2 - 47, py2 - 39, 11, 15, radians(40), radians(220));
  
  
  //우측 하단들사각형들(빨강, 노랑, 파랑, 하양, 초록)
  if (frameCount % 10 === 0) {
    squ1 = color(random(150,255), random(0,40), random(0,40));
    squ2 = color(random(200,255), random(180,255), random(0,50));
    squ3 = color(random(0,50), random(0,120), random(180,255));
    squ4 = color(random(100,255));
    squ5 = color(random(0,100), random(150,255), random(0,100));
  }
  
  rectMode(CORNERS);
  strokeWeight(3);
  stroke(80);
  
  fill(squ1);
  rect(410, 260, 600, 400);

  fill(squ2);
  rect(500, 200, 600, 400);

  fill(squ3);
  rect(445, 280, 600, 400);

  fill(squ4);
  rect(520, 240, 600, 400);
  
  fill(squ5);
  rect(480, 300, 600, 400); 
}

function keyPressed() {
  if (key === 's') {
    saveGif('moving abstract painting', 10);
  }
  
}