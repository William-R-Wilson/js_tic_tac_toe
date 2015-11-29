var board = ["", "", "",
             "", "", "",
             "", "", ""
            ];

var winner;
var compsTurn;
var activePlayer;
var human;
var computer;

// Choose your player at the beginning of the game
function startGame(gamepiece) {
  human = gamepiece;
  activePlayer = gamepiece;
  winner = false;
  if (activePlayer === "X") computer = "O";
  else computer = "X";
  console.log("Player = " + human);
  console.log("Computer = " + computer);
  compsTurn = false;
  clearBoard();
}

function clickPiece(position, pieceId) {
  console.log("click");
  // Restrict move on spot already taken
  if (board[position] === "") {
    if (activePlayer == undefined) {
      return;
    }
    board[position] = activePlayer;
    document.getElementById(pieceId).innerHTML = activePlayer;
    checkWin(board, activePlayer);
    //activePlayer = alternateXO(activePlayer);

  console.log(board);
}
}

// Winning Conditions
function checkWin(arr, player) {
  if ((arr[0] == player && arr[1] == player && arr[2] == player) ||
    (arr[3] == player && arr[4] == player && arr[5] == player) ||
    (arr[6] == player && arr[7] == player && arr[8] == player) ||
    (arr[0] == player && arr[3] == player && arr[6] == player) ||
    (arr[1] == player && arr[4] == player && arr[7] == player) ||
    (arr[2] == player && arr[5] == player && arr[8] == player) ||
    (arr[0] == player && arr[4] == player && arr[8] == player) ||
    (arr[2] == player && arr[4] == player && arr[6] == player)) {
    winner = true;
    console.log("Winner: " + winner);
    location.reload(true);
    //clearBoard();
    alert(player + " wins!");
  }
  else if (arr.indexOf("") === -1) {
    console.log("draw");
    location.reload(true);
    //clearBoard();
    alert("Draw!");
  }
  else {
    activePlayer = alternateXO(activePlayer);
    if (compsTurn === true) compsTurn = false;
    else {
      compsTurn = true;
      compMove();
    }
  }
}

// Alternate player back and forth between x & o
function alternateXO(p) {
  console.log('player alternated from ' + p);
  if (p == "X") return "O";
  else return "X";
}

function compMove() {
  console.log("computer moves now");
  if (compsTurn === true && winner === false) {
    analyzeBoard(board);
  }
  else {
    return;
  }
}

//sets up the board for a win
function initialMoves() {
  if (compsTurn === true && winner === false) {
    //var initialChoices = [0, 2, 6, 8];
    switch (true) {
      case (board[0] === ""):
        console.log("initialMove to " + 0);
        clickPiece(board[0], "game-piece-0");
        break;
      case (board[2] === ""):
        console.log("initialMove to " + 2);
        clickPiece(board[0], "game-piece-2");
        break;
      case (board[6] === ""):
        console.log("initialMove to 6");
        clickPiece(board[6], "game-piece-6");
        break;
      case (board[8] === ""):
        console.log("initialMove to ");
        clickPiece(board[8], "game-piece-8");
        break;
      default:
        randomMove();
        break;
      }
  }
  else {
    return;
    }
}

function randomMove() {
  if (compsTurn === true && winner === false) {
   while (compsTurn === true) {
      var x = Math.floor(Math.random() * 9);
      if (board[x] === "") {
        console.log("randomMove to " + x);
        clickPiece(x, "game-piece-" + x);
        //compsTurn = false;
        //return;
      }
    }
  }
}

//counters to human player
function analyzeBoard(arr) {
  console.log("analyzing!");
  switch(true) {
      //vertical choices
      //middle blank
    case (arr[0] === human && arr[3] === "" && arr[6] === human):
      clickPiece(3, "game-piece-3");
      break;
    case (arr[1] === human && arr[4] === "" && arr[7] === human):
      clickPiece(4, "game-piece-4");
      break;
    case (arr[2] === human && arr[5] === "" && arr[8] === human):
      clickPiece(5, "game-piece-5");
      break;
      //bottom blank
    case (arr[0] === human && arr[3] === human && arr[6] === ""):
      clickPiece(6, "game-piece-6");
      break;
    case (arr[1] === human && arr[4] === human && arr[7] === ""):
      clickPiece(7, "game-piece-7");
      break;
    case (arr[2] === human && arr[5] === human && arr[8] === ""):
      clickPiece(8, "game-piece-8");
      break;
      //top blank
    case (arr[0] === "" && arr[3] === human && arr[6] === human):
      clickPiece(0, "game-piece-0");
      break;
    case (arr[1] === "" && arr[4] === human && arr[7] === human):
      clickPiece(1, "game-piece-1");
      break;
    case (arr[2] === "" && arr[5] === human && arr[8] === human):
      clickPiece(2, "game-piece-2");
      break;
      //horizontal choices
      //middle blank
    case (arr[0] === human && arr[1] === "" && arr[2] === human):
      clickPiece(1, "game-piece-1");
      break;
    case (arr[3] === human && arr[4] === "" && arr[5] === human):
      clickPiece(4, "game-piece-4");
      break;
    case (arr[6] === human && arr[7] === "" && arr[8] === human):
      clickPiece(7, "game-piece-7");
      break;
      //left blank
    case (arr[0] === "" && arr[1] === human && arr[2] === human):
      clickPiece(0, "game-piece-0");
      break;
    case (arr[3] === "" && arr[4] === human && arr[5] === human):
      clickPiece(3, "game-piece-3");
      break;
    case (arr[6] === "" && arr[7] === human && arr[8] === human):
      clickPiece(6, "game-piece-6");
      break;
   //right blank
    case (arr[0] === human && arr[1] === human && arr[2] === ""):
      clickPiece(2, "game-piece-2");
      break;
    case (arr[3] === human && arr[4] === human && arr[5] === ""):
      clickPiece(5, "game-piece-5");
      break;
    case (arr[6] === human && arr[7] === human && arr[8] === ""):
      clickPiece(8, "game-piece-8");
      break;
    //diagonal
      //middle
    case ((arr[0] === human && arr[4] === "" && arr[8] === human) || (arr[2] === human && arr[4] === "" && arr[6] === human)):
      clickPiece(4, "game-piece-4");
      break;
      //left to right
    case (arr[0] === human && arr[4] === human && arr[8] === ""):
      clickPiece(8, "game-piece-8");
      break;
    case (arr[0] === "" && arr[4] === human && arr[8] === human):
      clickPiece(0, "game-piece-0");
      break;
      //right to left
    case (arr[2] === human && arr[4] === human && arr[6] === ""):
      clickPiece(6, "game-piece-6");
      break;
    case (arr[2] === "" && arr[4] === human && arr[6] === human):
      clickPiece(2, "game-piece-2");
      break;
    default:
      //initialMoves();
      randomMove();
      break;
  }
  //compsTurn = false;
  //return;
}

function clearBoard() {
  for (var x = 0; x <= 8; x++) {
    board[x] = "";
    document.getElementById("game-piece-" + x).innerHTML = "";
    }
  }
