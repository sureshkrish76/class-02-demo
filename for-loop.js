var stuff=['pencil','cats','car', 'book','turtle'];
var answer = prompt('what is one of my favorite things');
var flag;

for (i=0;i < stuff.length;i++) {
    console.log('current iteration"',stuff[i]);
    if (answer === stuff[i]) {
        alert('you got it right');
        flag = true;
        break;
    }
}

if (!flag) {
    alert('incorrect guess - try again');
}