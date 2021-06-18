//Запросить 2 числа и найти только наибольший общий делитель

const firstNumber = prompt('Enter the first number');
const lastNumber = prompt('Enter the second number');

function GCS(a,b){
    while (a != 0 && b != 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    return alert('The greatest common factor of these two numbers is ' + (a+b));
}

GCS(Number(firstNumber), Number(lastNumber));