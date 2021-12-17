var Player;
var Ai;
var ball;
var playerScore;
var aiScore;
 
function setup() {
  createCanvas(624, 351);
  Player = new Paddle(26);
  Ai = new Paddle(width - 48);
  ball = new Ball();
  playerScore = new Score(width / 2 - 40);
  aiScore = new Score(width / 2 + 40);
}
 
function draw() {
  background(0);
  Player.display();
  Ai.display();
  
  Player.update();
  Ai.update();
  
 
  if (Player.isUp) {
    Player.up();
  } else if (Player.isDown) {
    Player.down();
  }
  
  processAI();
  
  ball.update(playerScore, aiScore); 
  ball.display(); 
  
  ball.hasHitPlayer(Player); 
  ball.hasHitAi(Ai); 
  
  stroke(255); 
  line(width/2, 0, width/2, height); 
  
  playerScore.display();
  aiScore.display();
}

function processAI() {
  var middleOfPaddle = Ai.y + Ai.height / 2;
     
  if (middleOfPaddle > ball.y) {
    Ai.isUp = true;
    Ai.isDown = false;
  } else {
    Ai.isDown = true;
    Ai.isUp = false;
 
  }
}

function keyPressed() {
    if (keyCode == UP_ARROW) {
        Player.isUp = true;
    } else if (keyCode == DOWN_ARROW) {
        Player.isDown = true;
    }
}
 
function keyReleased() {
    if (keyCode == UP_ARROW) {
        Player.isUp = false;
    } else if (keyCode == DOWN_ARROW) {
        Player.isDown = false;
    }
}