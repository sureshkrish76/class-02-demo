var number;
var counter = 1;

while(number !== 20) {
    number = parseInt(prompt('guess my favorite number'));


    if (number < 20) {
      alert('Sorry you guessed low');
      counter++
    } else if(number > 20) {
        alert('You guesed too high');
        counter++
    } else if (isNaN(Number) || number === null) {
        alert('Please enter an valid number');
        counter++;
    }
    console.log('total guesses until I got it:',counter);
}