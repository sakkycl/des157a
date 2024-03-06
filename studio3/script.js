(function(){
    'use strict'
    console.log('reading JS');

    //input values
    const score = document.querySelector('#score');
    const game = document.querySelector('#game');
    const actionArea = document.querySelector('#actions');
    const gameControl = document.querySelector('#gamecontrol');
    const startGame = document.querySelector('#startgame');

    //sound effects
    const kitten = new Audio('sounds/kitten3.mp3');
    const catfight = new Audio('sounds/catfight.mp3');
    const btnsound = new Audio('sounds/button-3.mp3');
    const btns = document.querySelector('button');
    btns.addEventListener('mousedown', function () {
        btnsound.play();
    });
    
    //track game data
    const gameData = {
        dice: ['images/1die.png', 'images/2die.png', 'images/3die.png', 'images/4die.png', 'images/5die.png', 'images/6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    //current players 
    gameData.players[gameData.index]
    //first and second die
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]
    //current score
    gameData.score[gameData.index]
    //turn
    gameData.index
    //dice values
    gameData.roll1
    gameData.roll2
    gameData.rollSum
    //winning threshold
    gameData.rollSum

    //start game
    startGame.addEventListener("click", function(){

        //randomly set turn
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        //change start to quit button
        gameControl.innerHTML = '<button id="quit">Quit Game</button>';
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        //set up turn
        setUpTurn();
        function setUpTurn(){
        
            //change background to indicate turn
            if(gameData.index === 0){
                document.getElementById("p1").style.backgroundColor = "#8586BF";
                document.getElementById("p2").style.backgroundColor = "#7478B9";
            } else if (gameData.index === 1){
                document.getElementById("p1").style.backgroundColor = "#7478B9";
                document.getElementById("p2").style.backgroundColor = "#8586BF";
            } else {
                document.getElementById("p1").style.backgroundColor = "#7478B9";
                document.getElementById("p2").style.backgroundColor = "#7478B9";
            }

            //roll dice button
            actionArea.innerHTML = `<button id="roll">Roll Dice</button>`;
            document.getElementById('roll').addEventListener('click', function(){
                throwDice();
                btnsound.play();
            });

            //throw dice
            function throwDice(){

                actionArea.innerHTML = '';
                gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
                gameData.roll2 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
                game.innerHTML = `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
                gameData.rollSum = gameData.roll1 + gameData.roll2;
        
                //rolled two 1's 
                if(gameData.rollSum === 2){
                    actionArea.innerHTML = `<p>Oh snap! Snake eyes!</p>`;
                    gameData.score[gameData.index] = 0;
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    setTimeout(setUpTurn, 2000);
                    catfight.play();
                }
                //rolled one 1
                else if(gameData.roll1 === 1 || gameData.roll2 === 1){
                    gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                    actionArea.innerHTML = `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
                    setTimeout(setUpTurn, 2000);
                    catfight.play();
                }
                //rolled no 1's
                else {
                    //roll again and skip turn button
                    gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
                    actionArea.innerHTML = '<button id="rollagain">Roll Again</button> <button id="pass">Skip Turn</button>';
                    document.getElementById('rollagain').addEventListener('click', function(){
                        setUpTurn();
                        btnsound.play();
                    });
                    document.getElementById('pass').addEventListener('click', function(){
                        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        setUpTurn();
                        btnsound.play();
                    });

                    //check winning condition 
                    checkWinningCondition();
                    function checkWinningCondition(){

                        //game ends
                        if(gameData.score[gameData.index] > gameData.gameEnd){
                            actionArea.innerHTML = `<h2>${gameData.players[gameData.index]} wins!`;
                            document.getElementById('quit').innerHTML = "Play Again";
                            kitten.play();
                            
                        } else {
                            //show current score
                            showCurrentScore();
                            function showCurrentScore(){

                                //change cat 2's health bar
                                if(gameData.score[0] === 30 || gameData.score[0] > 30){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp0.png" alt="hp0" id="hpbar">';
                                } else if (gameData.score[0] === 29){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp1.png" alt="hp1" id="hpbar">';
                                } else if (gameData.score[0] === 28){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp2.png" alt="hp2" id="hpbar">';
                                } else if (gameData.score[0] === 27){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp3.png" alt="hp3" id="hpbar">';
                                } else if (gameData.score[0] === 26){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp4.png" alt="hp4" id="hpbar">';
                                } else if (gameData.score[0] === 25){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp5.png" alt="hp5" id="hpbar">';
                                } else if (gameData.score[0] === 24){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp6.png" alt="hp6" id="hpbar">';
                                } else if (gameData.score[0] === 23){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp7.png" alt="hp7" id="hpbar">';
                                } else if (gameData.score[0] === 22){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp8.png" alt="hp8" id="hpbar">';
                                } else if (gameData.score[0] === 21){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp9.png" alt="hp9" id="hpbar">';
                                } else if (gameData.score[0] === 20){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp10.png" alt="hp10" id="hpbar">';
                                } else if (gameData.score[0] === 19){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp11.png" alt="hp11" id="hpbar">';
                                } else if (gameData.score[0] === 18){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp12.png" alt="hp12" id="hpbar">';
                                } else if (gameData.score[0] === 17){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp13.png" alt="hp13" id="hpbar">';
                                } else if (gameData.score[0] === 16){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp14.png" alt="hp14" id="hpbar">';
                                } else if (gameData.score[0] === 15){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp15.png" alt="hp15" id="hpbar">';
                                } else if (gameData.score[0] === 14){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp16.png" alt="hp16" id="hpbar">';
                                } else if (gameData.score[0] === 13){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp17.png" alt="hp17" id="hpbar">';
                                } else if (gameData.score[0] === 12){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp18.png" alt="hp18" id="hpbar">';
                                } else if (gameData.score[0] === 11){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp19.png" alt="hp19" id="hpbar">';
                                } else if (gameData.score[0] === 10){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp20.png" alt="hp20" id="hpbar">';
                                } else if (gameData.score[0] === 9){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp21.png" alt="hp21" id="hpbar">';
                                } else if (gameData.score[0] === 8){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp22.png" alt="hp22" id="hpbar">';
                                } else if (gameData.score[0] === 7){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp23.png" alt="hp23" id="hpbar">';
                                } else if (gameData.score[0] === 6){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp24.png" alt="hp24" id="hpbar">';
                                } else if (gameData.score[0] === 5){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp25.png" alt="hp25" id="hpbar">';
                                } else if (gameData.score[0] === 4){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp26.png" alt="hp26" id="hpbar">';
                                } else if (gameData.score[0] === 3){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp27.png" alt="hp27" id="hpbar">';
                                } else if (gameData.score[0] === 2){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp28.png" alt="hp28" id="hpbar">';
                                } else if (gameData.score[0] === 1){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp29.png" alt="hp29" id="hpbar">';
                                } else if (gameData.score[0] === 0){
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp30.png" alt="hp30" id="hpbar">';
                                } else {
                                    document.getElementById("p2hpbar").innerHTML = '<img src="images/hp30.png" alt="hp30" id="hpbar">';
                                }

                                //change cat 1's health bar
                                if(gameData.score[1] === 30 || gameData.score[1] > 30){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp0.png" alt="hp0" id="hpbar">';
                                } else if (gameData.score[1] === 29){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp1.png" alt="hp1" id="hpbar">';
                                } else if (gameData.score[1] === 28){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp2.png" alt="hp2" id="hpbar">';
                                } else if (gameData.score[1] === 27){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp3.png" alt="hp3" id="hpbar">';
                                } else if (gameData.score[1] === 26){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp4.png" alt="hp4" id="hpbar">';
                                } else if (gameData.score[1] === 25){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp5.png" alt="hp5" id="hpbar">';
                                } else if (gameData.score[1] === 24){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp6.png" alt="hp6" id="hpbar">';
                                } else if (gameData.score[1] === 23){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp7.png" alt="hp7" id="hpbar">';
                                } else if (gameData.score[1] === 22){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp8.png" alt="hp8" id="hpbar">';
                                } else if (gameData.score[1] === 21){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp9.png" alt="hp9" id="hpbar">';
                                } else if (gameData.score[1] === 20){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp10.png" alt="hp10" id="hpbar">';
                                } else if (gameData.score[1] === 19){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp11.png" alt="hp11" id="hpbar">';
                                } else if (gameData.score[1] === 18){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp12.png" alt="hp12" id="hpbar">';
                                } else if (gameData.score[1] === 17){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp13.png" alt="hp13" id="hpbar">';
                                } else if (gameData.score[1] === 16){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp14.png" alt="hp14" id="hpbar">';
                                } else if (gameData.score[1] === 15){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp15.png" alt="hp15" id="hpbar">';
                                } else if (gameData.score[1] === 14){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp16.png" alt="hp16" id="hpbar">';
                                } else if (gameData.score[1] === 13){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp17.png" alt="hp17" id="hpbar">';
                                } else if (gameData.score[1] === 12){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp18.png" alt="hp18" id="hpbar">';
                                } else if (gameData.score[1] === 11){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp19.png" alt="hp19" id="hpbar">';
                                } else if (gameData.score[1] === 10){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp20.png" alt="hp20" id="hpbar">';
                                } else if (gameData.score[1] === 9){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp21.png" alt="hp21" id="hpbar">';
                                } else if (gameData.score[1] === 8){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp22.png" alt="hp22" id="hpbar">';
                                } else if (gameData.score[1] === 7){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp23.png" alt="hp23" id="hpbar">';
                                } else if (gameData.score[1] === 6){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp24.png" alt="hp24" id="hpbar">';
                                } else if (gameData.score[1] === 5){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp25.png" alt="hp25" id="hpbar">';
                                } else if (gameData.score[1] === 4){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp26.png" alt="hp26" id="hpbar">';
                                } else if (gameData.score[1] === 3){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp27.png" alt="hp27" id="hpbar">';
                                } else if (gameData.score[1] === 2){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp28.png" alt="hp28" id="hpbar">';
                                } else if (gameData.score[1] === 1){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp29.png" alt="hp29" id="hpbar">';
                                } else if (gameData.score[1] === 0){
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp30.png" alt="hp30" id="hpbar">';
                                } else {
                                    document.getElementById("p1hpbar").innerHTML = '<img src="images/hp30.png" alt="hp30" id="hpbar">';
                                }
                            }
                        }
                    }
                }
            }
        }

    })

})();