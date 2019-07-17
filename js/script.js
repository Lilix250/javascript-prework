let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);


if (playerInput == randomNumber) {
    printMessage('Remis!');
}

if (randomNumber == 1) {
    if (playerInput == '2') {
        printMessage('Wygrałeś!');
    }
    else if (playerInput == '3') {
        printMessage('Przegrałeś :(');
    }
}

if (randomNumber == 2) {
    if (playerInput == '1') {
        printMessage('Przegrałeś :(');
    } else if (playerInput == '3') {
        printMessage('Wygrałeś!');
    }

}

if(randomNumber == 3) {
    if (playerInput == '1') {
        printMessage('Wygrałeś!');
    }
    else if (playerInput == '2') {
        printMessage('Przegrałeś :(');
    }
}