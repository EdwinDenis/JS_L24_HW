//Определить количество цифр в введенном числе

const number = prompt('Enter the number');

function DigitNumber(n) {
    if (n < 0) return alert('The amount of digits in this number is ' + (n.length - 1));
    return alert('The amount of digits in this number is ' + n.length);
}

DigitNumber(number);