let playerX = true 

const playerTurn = function() {
let repete = $(this).attr("class").split(' ').length
if (playerX && repete == 1) {
    $ (this).addClass('x')
} else if (repete == 1) {
    $ (this).addClass('circle')
}
playerX = !playerX 
}
const checkForWin = function() {
    const $cells = $('.cell')
    if ($cells[0] == $cells[1] && $cells[0] == $cells[2]) {
    } else if ($cells[3] == $cells[4] && $cells[3] == $cells[5]) {
    } else if ($cells[6] == $cells[7] && $cells[6] == $cells[8]) {
    } else if ($cells[0] == $cells[3] && $cells[0] == $cells[6]) {
    } else if ($cells[1] == $cells[4] && $cells[1] == $cells[7]) {
    } else if ($cells[2] == $cells[5] && $cells[2] == $cells[8]) {
    } else if ($cells[0] == $cells[4] && $cells[0] == $cells[8]) {
    } else if ($cells[2] == $cells[4] && $cells[2] == $cells[6]) {

    }    
    };    
$ ('.cell').on('click', playerTurn)

console.log(checkForWin);