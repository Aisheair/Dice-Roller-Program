// Dice Roller Program



function rollDice(){

    const numofDice = document.getElementById("numOfDice").value 
    const diceResult = document.getElementById("diceResult") 
    const diceimage = document.getElementById("diceimage") 
    const values = [];
    const images = [];

    for(let i = 0; i < numofDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="diceImage/${value}.png" >`);
        console.log(value);
    }
  
    
    diceResult.textContent = `dice: ${values.join(', ')}`
    diceimage.innerHTML = images.join(' ')
}






