function pickComputerMove (){
    const numberByConsole = Math.random();
    let computerPick = '';
    if (numberByConsole > 0 && numberByConsole < 1/3 ){
        computerPick = 'Rock';
    } else if (numberByConsole > 1/3 && numberByConsole < 2/3){
        computerPick = 'Paper';
    } else {
        computerPick = 'Scissors';
    }

    return computerPick;
}
let selfElection = '';
function winOrLose (computerPick, selfElection){
    console.log(selfElection);
    console.log(computerPick);
    if (selfElection === computerPick){
        console.log('Empate!');
    }
}