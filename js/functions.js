let playerWin = 0;
let computerWin = 0;

function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'
        || argComputerMove == 'papier' && argPlayerMove == 'nożyce'
        || argComputerMove == 'nożyce' && argComputerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        playerWin += 1;
    }

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    }

    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'
        || argComputerMove == 'papier' && argPlayerMove == 'kamień'
        || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Tym razem przegrywasz')
        computerWin += 1;
    }

    printMessage('Gracz ' +  playerWin + ' - ' + computerWin + ' Komputer');
}