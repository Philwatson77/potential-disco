let playerX = true 

let currentGame = ['', '', '', '', '', '', '', '', '']

const playerTurn = function() {
let repete = $(this).attr("class").split(' ').length
if (playerX && repete == 1) {
    $ (this).addClass('x')
    currentGame[$ ('.cell').index(this)] = 'x'
    playerX = !playerX 
} else if (repete == 1) {
    $ (this).addClass('circle')
    currentGame[$ ('.cell').index(this)] = 'o'
    playerX = !playerX 
}
checkForWin() 
}
const checkForWin = function() {
    if (currentGame[0] == currentGame[1] && currentGame[0] == currentGame[2] && currentGame[0] != '') {
        alert(currentGame[0] + ' Wins')
    } else if (currentGame[3] == currentGame[4] && currentGame[3] == currentGame[5] && currentGame[3] != '') {
        alert(currentGame[3] + ' Wins')
    } else if (currentGame[6] == currentGame[7] && currentGame[6] == currentGame[8] && currentGame[6] != '') {
        alert(currentGame[6] + ' Wins')
    } else if (currentGame[0] == currentGame[3] && currentGame[0] == currentGame[6] && currentGame[0] != '') {
        alert(currentGame[0] + ' Wins')
    } else if (currentGame[1] == currentGame[4] && currentGame[1] == currentGame[7] && currentGame[1] != '') {
        alert(currentGame[1] + ' Wins')
    } else if (currentGame[2] == currentGame[5] && currentGame[2] == currentGame[8] && currentGame[2] != '') {
        alert(currentGame[2] + ' Wins')
    } else if (currentGame[0] == currentGame[4] && currentGame[0] == currentGame[8] && currentGame[0] != '') {
        alert(currentGame[0] + ' Wins')
    } else if (currentGame[2] == currentGame[4] && currentGame[2] == currentGame[6] && currentGame[2] != '') {
        alert(currentGame[2] + ' Wins')

    } 
    if (!currentGame.includes('')) { 
        alert('draw')
    
    }  
    }; 
    
const reset = function() {
    for(let i = 0; i < 9; i++){
    currentGame[i] = ''
    $ ('.cell').eq(i).removeClass('x circle')
    } 
    playerX = true
}  
$ ('.cell').on('click', playerTurn)
$ ('#restartButton').on('click', reset)