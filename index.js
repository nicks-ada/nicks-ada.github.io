// Global variables 
var emoji_money;
var emoji_angry;
var emoji_smile;
var emoji_sick;
var emoji_liar;
var mySound;
var edgeSize = 5;
var level_1_allow = false;
var level_2_allow = false;
var level_3_allow = false;
var level_4_allow = false;
var level_5_allow = false;
var end_screen_allow = false;
var Player1_score = 0;
var Player2_score = 0;
var GAME_SPEEDX = 5;
var GAME_SPEEDY = 5;
var GAME_SPEEDX2 = 5; 
var GAME_SPEEDY2 = 5;
var GAME_SPEED3X = 5;
var GAME_SPEED3Y = 7;
var GAME_SPEED4X = 5;
var GAME_SPEED4Y = 7;
var flying_emoji1;
var flying1X = 100;
var flying1Y = 150;
var flying_emoji2;
var flying2X = 900;
var flying2Y = 500;
var flying_emoji3;
var flying3X = 900;
var flying3Y = 500;
var flying_emoji4;
var flying4X = 100;
var flying4Y = 150;
var scale_diff1 = 1;
var scale_diff2 = 1;
var scale_diff3 = 1;
var scale_diff4 = 1;
var score_add_allow_1 = false;
var score_add_allow_2 = false;
var score_add_allow_3 = false;
var score_add_allow_4 = false;
var score_add_allow_5 = false;

// Loading the emojis
function preload () {
    emoji_money = loadImage("money_face_100x100.png");
    emoji_sick = loadImage("emoji_sick_100x100.png");
    emoji_angry = loadImage("emoji_angry_100x100.png");
    emoji_smile = loadImage("emoji_smile_100x100.png");
    emoji_liar = loadImage("emoji_liar_100x100.png");
    flying_emoji1 = loadImage("money_face_100x100.png");
    flying_emoji2 = loadImage("emoji_liar_100x100.png");
    flying_emoji3 = loadImage("emoji_angry_100x100.png");
    flying_emoji4 = loadImage("emoji_smile_100x100.png");
    mySound = loadSound("winning_tune.mp3");
}

// The set up function that will only run once 
function setup () {
    createCanvas(1500, 600);
    topEdge = createSprite(width/2,edgeSize/2,width,edgeSize);
    leftEdge = createSprite(edgeSize/3,width/5,edgeSize,height);
    bottomEdge = createSprite(width/2,height-edgeSize/2,width,edgeSize);
    rightEdge = createSprite(width-edgeSize/2,height/2,edgeSize,height);
    middleDivider = createSprite(750, 0, edgeSize*2, height*2);
    boundary = new Group();
    boundary.add(topEdge);
    boundary.add(leftEdge);
    boundary.add(bottomEdge);
    boundary.add(rightEdge);
    boundary.add(middleDivider);
    flying1 = createSprite(flying1X, flying1Y);
    flying1.addImage(flying_emoji1);
    flying2 = createSprite(flying2X, flying2Y);
    flying2.addImage(flying_emoji2);
    flying3 = createSprite(flying3X, flying3Y);
    flying3.addImage(flying_emoji3);
    flying4 = createSprite(flying4X, flying4Y);
    flying4.addImage(flying_emoji4);
}

// The function that will hold the start screen of the game
function start_screen () {
    textSize(50);
    text("Please press the space bar to start the game!", 250, 300);
}

// The function that will hold the first level of the game
function level_1 () {
    // Player 1 side
    image(emoji_money, 320, 240); // Centre emoji
    image(emoji_money, 320, 10); // Top emoji
    image(emoji_angry, 320, 490); // Bottom emoji
    image(emoji_liar, 10, 240); // Left emoji
    image(emoji_sick, 640, 240); // Right emoji
    // Player 2 side
    image(emoji_money, 1100, 240); // Centre emoji
    image(emoji_money, 1100, 10); // Top emoji
    image(emoji_angry, 1100, 490); // Bottom emoji
    image(emoji_liar, 760, 240); // Left emoji
    image(emoji_sick, 1390, 240); // Right emoji
}

// Function that will hold the second level of the game
function level_2 () {
    // Player 1 side
    image(emoji_sick, 320, 240); // Centre emoji
    image(emoji_liar, 320, 10); // Top emoji
    image(emoji_money, 320, 490); // Bottom emoji
    image(emoji_sick, 10, 240); // Left emoji
    image(emoji_angry, 640, 240); // Right emoji
    // Player 2 side
    image(emoji_sick, 1100, 240); // Centre emoji
    image(emoji_liar, 1100, 10); // Top emoji
    image(emoji_money, 1100, 490); // Bottom emoji
    image(emoji_sick, 760, 240); // Left emoji
    image(emoji_angry, 1390, 240); // Right emoji
}

// Function that will hold the third level of the game
function level_3 () {
    image(emoji_liar, 320, 240); // Centre emoji
    image(emoji_angry, 320, 10); // Top emoji
    image(emoji_sick, 320, 490); // Bottom emoji
    image(emoji_money, 10, 240); // Left emoji
    image(emoji_liar, 640, 240); // Right emoji
    // Player 2 side
    image(emoji_liar, 1100, 240); // Centre emoji
    image(emoji_angry, 1100, 10); // Top emoji
    image(emoji_sick, 1100, 490); // Bottom emoji
    image(emoji_money, 760, 240); // Left emoji
    image(emoji_liar, 1390, 240); // Right emoji
}

// Function that will hold the forth level of the game
function level_4 () {
    image(emoji_angry, 320, 240); // Centre emoji
    image(emoji_sick, 320, 10); // Top emoji
    image(emoji_angry, 320, 490); // Bottom emoji
    image(emoji_liar, 10, 240); // Left emoji
    image(emoji_money, 640, 240); // Right emoji
    // Player 2 side
    image(emoji_angry, 1100, 240) // Centre emoji
    image(emoji_sick, 1100, 10); // Top emoji
    image(emoji_angry, 1100, 490); // Bottom emoji
    image(emoji_liar, 760, 240); // Left emoji
    image(emoji_money, 1390, 240); // Right emoji
} 

// Function that will hold the fith level of the game
function level_5 () {
    image(emoji_money, 320, 240); // Centre emoji
    image(emoji_money, 320, 10); // Top emoji
    image(emoji_angry, 320, 490); // Bottom emoji
    image(emoji_liar, 10, 240); // Left emoji
    image(emoji_sick, 640, 240); // Right emoji
    // Player 2 side
    image(emoji_money, 1100, 240) // Centre emoji
    image(emoji_money, 1100, 10); // Top emoji
    image(emoji_angry, 1100, 490); // Bottom emoji
    image(emoji_liar, 760, 240); // Left emoji
    image(emoji_sick, 1390, 240); // Right emoji
}

// Fuction that will hide the previous emoji from having any part of it being shown
function behind_box () {
    stroke(255);
    p1_box_top = rect(320,12,100,100);
    p1_box_middle = rect(320,240,100,100);
    p1_box_botton = rect(320,490,100,100);
    p1_box_left = rect(10,240,100,100);
    p1_box_right = rect(640,240,100,100);
    p2_box_top = rect(1100,240,100,100);
    p2_box_middle = rect(1100,10,100,100);
    p2_box_bottom = rect(1100,490,100,100);
    p2_box_left = rect(760,240,100,100);
    p2_box_right = rect(1390,240,100,100);
}

// Function for the green box on the win screen
function win_box(top_left1, top_left2, w, l, r, g, b) {
    fill(r,g,b);
    box = rect(top_left1, top_left2, w, l);
    fill(0,0,255);
    stroke(0,0,255);
    rect(0, 0, 1500, 10);
    rect(0, 0, 10, 750);
    rect(750, 0, 10, 1500);
    rect(1490, 0, 10, 1500);
    rect(0, 590, 1500, 10);
}

// Function that will hold the end screen
function player_1_end_screen () {
    win_box(0, 0, 755, 750, 0, 255, 0);
    win_box(755, 0, 750, 750, 255, 0 , 0);
    textSize(50);
    fill(0);
    stroke(0,255,0);
    text("Well done player 1\nyou are the winner :)", 170, 275);
    text("PLAY AGAIN?\n   PRESS R.", 220, 500)
    stroke(255,0,0);
    text("          I'm sorry player 2\n      you didn't win this time :(", 800, 275);
    text("PLAY AGAIN?\n   PRESS R.", 950, 500)
    stroke(255,0,0);
    text("Score: " + Player2_score, 1050, 50);
    stroke(0,255,0);
    text("Score: " + Player1_score, 310, 50);
}

// Function that will hold the end screen
function player_2_end_screen () {
    win_box(750, 0, 750, 750, 0, 255 , 0);
    win_box(0, 0, 750, 750, 255, 0, 0);
    textSize(50);
    fill(0);
    stroke(0,255,0);
    text("          Well done player 2\n         you are the winner :)", 800, 275);
    text("PLAY AGAIN?\n   PRESS R.", 950, 500)
    stroke(255,0,0);
    text("     I'm sorry player 1\nyou didn't win this time :(", 120, 275);
    text("PLAY AGAIN?\n   PRESS R.", 220, 500)
    stroke(0,255,0);
    text("Score: " + Player2_score, 1050, 50);
    stroke(255,0,0);
    text("Score: " + Player1_score, 310, 50);
}

// Function for the flying emojis
function flying_emoji_player_1 () {
    flying1.velocity.y = -GAME_SPEEDX;
    flying1.velocity.x = GAME_SPEEDY;
}

// Funcion for the flying emoji on the player 2 side
function flying_emoji_player_2 () {
    flying2.velocity.y = -GAME_SPEEDX2;
    flying2.velocity.x = GAME_SPEEDY2;
}

//function to diaplay flying emoji 3
function flying_emoji_player_3 () {
    flying3.velocity.y = -GAME_SPEED3X;
    flying3.velocity.x = GAME_SPEED3Y;
}

// Function to display flying emoji 4
function flying_emoji_player_4 () {
    flying4.velocity.y = -GAME_SPEED4X;
    flying4.velocity.x = GAME_SPEED4Y;  
} 
// Function to diplay the rules for the game
function rules_read () {
    fill(0);
    stroke(0);
    text("Player 1\ngame zone", 25, 25);
}

// Funcion where all sprites will be drawn
function draw() {
    background(255);
    drawSprites();
    flying1.scale = scale_diff1;
    flying2.scale = scale_diff2; 
    flying3.scale = scale_diff3;
    flying4.scale = scale_diff4;
    // The collide for the emoji on the player 1 side
    if (flying1.collide(topEdge)) {
        GAME_SPEEDX = -20;
    }
    if (flying1.collide(bottomEdge)) {
        GAME_SPEEDX = 20;
    }
    if (flying1.collide(leftEdge)) {
        GAME_SPEEDY = 20;
    }
    if (flying1.collide(rightEdge)) {
        GAME_SPEEDY = -20;
    }
    if (flying1.collide(middleDivider)) {
        GAME_SPEEDY = -20;
    }

    // The collide for the emoji on the player 2 side
    if (flying2.collide(topEdge)) {
        GAME_SPEEDX2 = -20;
    }
    if (flying2.collide(bottomEdge)) {
        GAME_SPEEDX2 = 20;
    }
    if (flying2.collide(leftEdge)) {
        GAME_SPEEDY2 = 20;
    }
    if (flying2.collide(rightEdge)) {
        GAME_SPEEDY2 = -20;
    }
    if (flying2.collide(middleDivider)) {
        GAME_SPEEDY2 = 20;
    }
    
    // The collide for the emoji on the player 2 side
    if (flying3.collide(topEdge)) {
        GAME_SPEED3X = -20;
    }
    if (flying3.collide(bottomEdge)) {
        GAME_SPEED3X = 20;
    }
    if (flying3.collide(leftEdge)) {
        GAME_SPEED3Y = 20;
    }
    if (flying3.collide(rightEdge)) {
        GAME_SPEED3Y = -20;
    }
    if (flying3.collide(middleDivider)) {
        GAME_SPEED3Y = 20;
    }

    // collide for emoji 4
    if (flying4.collide(topEdge)) {
        GAME_SPEED4X = -20; 
    }
    if (flying4.collide(bottomEdge)) {
        GAME_SPEED4X = 20; 
    }
    if (flying4.collide(leftEdge)) {
        GAME_SPEED4Y = 20; 
    }
    if (flying4.collide(rightEdge)) {
        GAME_SPEED4Y = -20; 
    }
    if (flying4.collide(middleDivider)) {
        GAME_SPEED4Y = -20; 
    }
    flying_emoji_player_1()
    flying_emoji_player_2()
    flying_emoji_player_3()
    flying_emoji_player_4()
    // If statement for each level so that only one can be shown at any one time.
    if (level_1_allow == true) {
        score_add_allow_1 = true;
        flying_emoji_player_1()
        flying_emoji_player_2()
        flying_emoji_player_3()
        flying_emoji_player_4()
        level_1()
        if (level_2_allow == true) {
            score_add_allow_1 = false;
            score_add_allow_2 = true;
            behind_box();           
            level_2()
            if (level_3_allow == true) {
                score_add_allow_2 = false;
                score_add_allow_3 = true;
                behind_box();
                level_3()
                if (level_4_allow == true) {
                    score_add_allow_3 = false;
                    score_add_allow_4 = true;
                    behind_box();
                    level_4()
                    if (level_5_allow == true) {
                        score_add_allow_4 = false;
                        score_add_allow_5 = true;
                        behind_box();
                        level_5()
                        if (end_screen_allow == true) {
                            score_add_allow_5 = false;
                            if (Player1_score > Player2_score) {
                                player_1_end_screen()
                                mySound.setVolume(0.5);
                                mySound.play();
                            }
                            if (Player2_score > Player1_score) {
                                player_2_end_screen()
                                mySound.setVolume(0.5);
                                mySound.play();
                            }
                        } else{
                            level_5()
                        }
                    } else {
                        level_4()
                    }
                } else {
                    level_3()
                }
            } else {
                level_2()
            }
        } else {
            level_1()
        }
    } else {
        start_screen()
    }
}
// Function that will detect if keys are pressed
function keyPressed() {
    // If the spacebar is pressed then the game will be started
    if (keyCode == 32) {
        level_1_allow = true;
    } else {
        // This line of code keeps the game there if rather than any other key would make the game disappear
        level_1_allow = level_1_allow;
    }
    // Player one correct key press on level 1
    if (keyCode == 87 && level_1_allow == true && score_add_allow_1 == true) {
        Player1_score = Player1_score + 1;
        level_2_allow = true;
    } 
    // Player two correct key press on level 1
    if (keyCode == 38 && level_1_allow == true && score_add_allow_1 == true) {
        Player2_score = Player2_score + 1;
        level_2_allow = true;
    } 
    // Player one correct key press on level 2
    if (keyCode == 65 && level_2_allow == true && score_add_allow_2 == true) {
        Player1_score = Player1_score + 1;
        level_3_allow = true;
    }
    // Player two correct key press on level 2
    if (keyCode == 37 && level_2_allow == true && score_add_allow_2 == true) {
        Player2_score = Player2_score + 1;
        level_3_allow = true;
    }
    // Player one correct key press on level 3
    if (keyCode == 68 && level_3_allow == true && score_add_allow_3 == true) {
        Player1_score = Player1_score + 1;
        level_4_allow = true;
    }
    // Player two correct key press on level 3
    if (keyCode == 39 && level_3_allow == true && score_add_allow_3 == true) {
        Player2_score = Player2_score + 1;
        level_4_allow = true;
    }
    // Player one correct key press on level 4 
    if (keyCode == 83 && level_4_allow == true && score_add_allow_4 == true) {
        Player1_score = Player1_score + 1;
        level_5_allow = true;
    }
    // Player two correct key press on level 4
    if (keyCode == 40 && level_4_allow == true && score_add_allow_4 == true) {
        Player2_score = Player2_score + 1;
        level_5_allow = true;
    }
    // Player one correct key press on level 5
    if (keyCode == 87 && level_5_allow == true && score_add_allow_5 == true) {
        Player1_score = Player1_score + 1;
        end_screen_allow = true;
    }
    // Player two correct key press on level 5
    if (keyCode == 38 && level_5_allow == true && score_add_allow_5 == true) {
        Player2_score = Player2_score + 1;
        end_screen_allow = true;
    }
    // Reset for the game
    if (keyCode == 82 && end_screen_allow == true) {
        Player1_score = 0;
        Player2_score = 0;
        level_1_allow = false;
        level_2_allow = false;
        level_3_allow = false;
        level_4_allow = false;
        level_5_allow = false;
        end_screen_allow = false;
        GAME_SPEEDX = 5;
        GAME_SPEEDY = 5;
        GAME_SPEEDX2 = 5; 
        GAME_SPEEDY2 = 5;
        GAME_SPEED3X = 5;
        GAME_SPEED3Y = 7;
        GAME_SPEED4X = 5;
        GAME_SPEED4Y = 7;
        scale_diff1 = 1;
        scale_diff2 = 1;
        scale_diff3 = 1;
        scale_diff4 = 1;
    }
}
