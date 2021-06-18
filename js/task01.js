//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

const firstNumber = prompt('Enter the first range number');
const lastNumber = prompt('Enter the last range number');

function Sum(fNum,lNum) {
    let sumeOfNumbers = 0;
    if (fNum == lNum) return alert('Sum = 0');
    else if (fNum > lNum) return alert('The first number of the range shoud be bigger than the last number');
    else {
        for (i = fNum; i <= lNum; i++){
            sumeOfNumbers = sumeOfNumbers + i;
        }
        
    } 
    return alert('Sume of range numbers = ' + sumeOfNumbers);
}

Sum(Number(firstNumber),Number(lastNumber));

