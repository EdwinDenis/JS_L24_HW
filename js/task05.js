//  Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей
//  При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран
//  Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем

const amountNumbers = prompt('Сколько числе вы хотите ввести?')

function Statistics (n) {
    let evenAmount = 0;
    let oddAmount = 0;
    let positiveAmount = 0;
    let negativeAmount = 0;
    let zeroAmount = 0;

    for (i = 1; i <= n; i++){
        let number = prompt('Ведите число ' + i + ':');
        if (number == 0) zeroAmount += 1;
        if (number < 0) negativeAmount += 1;
        if (number > 0) positiveAmount += 1;
        if ((number % 2 == 0) && (number != 0)) evenAmount += 1;
        if (number % 2 != 0) oddAmount += 1;
    }
    return alert('Вы ввели ' + zeroAmount + ' нулей, ' + negativeAmount + ' отрицательных, ' + positiveAmount + ' положительных, ' + evenAmount + ' четных, ' + oddAmount + ' нечетных числа');
}

Statistics(amountNumbers);
