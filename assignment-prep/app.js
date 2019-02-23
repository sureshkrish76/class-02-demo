var playerName = prompt('Please enter your Name');
window.alert('Welcome to my gaming world-->'+playerName);
alert(playerName+' Lets play a guessing game to understand more about me');


var totalQuestions=1;
var totalCorrect = 1;
var totalAttempts=1;
var correctAnswer= 'N';

// Question 1 
while (totalAttempts < 4) {
numOfKids = kidsSelection();

if (parseInt(numOfKids) === 1) {
    alert('Wow your guess is awesome');
    correctAnswer = 'Y';
    totalCorrect++;
    break;
} else if (parseInt(numOfKids) > 1 ){
    alert("Your answer is too high,  you have few more chances");
    totalAttempts++;
} else {
    alert("Your answer is too low, you have few more chances");
    totalAttempts++;
}
}  
if (correctAnswer === 'N') {
   alert('You have execeeed maximum number of chances Better luck next time');
   alert("I have 1 Kid");
}

totalQuestions++;

function kidsSelection() {
    var kids = prompt('how many kids do I have? 1 2 3');
    console.log('Number of kids:', kids);
    return kids;
}

//Question 2
var country = prompt('Am I from India??');
if (country.toUpperCase() == 'Y' || country.toUpperCase() === 'YES') {
    alert("You guess about my country is correct");
    console.log('Am I from India:'+country)
    totalCorrect++;
}

/*
totalQuestions++;
// Question 3
var company = prompt("Where do I work currently ? Amazon,Google, MicroSoft");

if (company.toLowerCase() === 'amazon') {
    console.log("Your Guess is about my company is correct:"+company);
    alert("Your guess about my company is correct");
    totalCorrect++;
}
*/

favouritesyesno('Amazon');
favouritesyesno('green');

function favouritesyesno(yesnoinput) {
    var userinput = prompt("Do I like " + yesnoinput + " ? - Y or N");
    if (userinput.toUpperCase() === 'Y') {
       // totalCorrect++
    } else
    {

    }
}

// Question 4
totalQuestions++;
var city = prompt("Which City do I live currently?");
if (city.toUpperCase() === 'BELLEVUE') {
    console.log('City Answer:'+city);
    alert("Your Guess about my city is correct");
    totalCorrect++;
}

/*
// Question 5
totalQuestions++;
var color = prompt("Guess my favorite color");
if (color.toUpperCase() === 'GREEN') {
    console.log('Guessed color:'+color);
    alert('Your guess about the color:'+color+' is correct');
}
*/

console.log('Thanks for playing, you have answered ' + totalCorrect + 'correctly' + ' out of  '+ totalQuestions+' questions');
alert('Thanks for playing, you have answered ' + totalCorrect + 'correctly' + ' out of  '+ totalQuestions+' questions');


document.getElementById('city').innerHTML = city;
document.getElementById('kids').innerHTML = numOfKids;
document.getElementById('color').innerHTML = color;
document.getElementById('company').innerHTML = company;
document.getElementById('country').innerHTML = country;


//Question 6 Favorites fruits question

alert("Please enter 3 fruits you like");
var fruits = [];

for (i=1;i<4;i++) {
//alert('Enter the fruit '+j+' you like');
fruits[i] = fruitsInput();
}

function fruitsInput(){
   fruit= prompt("Enter the fruit "+ i +" you like");
   console.log(fruit);
   return fruit;
}

for (i=1;i<fruits.length;i++) {
    alert(fruits[i]);
    console.log(fruits[i]);
}

//Question 7 Favorites Languages question

var programmingLang = [];
var j=1;
var length = 4;

while (j < length) 
{
    programmingLang[j]= langInput();
   // alert(programmingLang[j]);
    j++;
}

function langInput() {
    language = prompt('Enter the programming language '+j+' you like');
    console.log('language:'+language);
    return language;
}