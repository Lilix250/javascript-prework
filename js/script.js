function playGame(playerInput) {
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */
    
    clearMessages();
    
    let playerMove = getMoveName(playerInput);

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
    printMessage('Guzik "Kamień" został kliknięty');
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('Guzik "Papier" został kliknięty');
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage('Guzik "Nożyce" został kliknięty');
    playGame(3);
  });
