//Запросить у пользователя число и вывести все делители этого числа

const nurmber = prompt('Enter the number');

function Divisors (n) {
    if (n < 0) return alert('The number should be above 0');
    else if (n == 0) return alert ('The divisors of the number is 0');
    else if (n == 1) return alert ('The divisors of the number is 1');
    else {
        let arr = [];
        let j = 1;
        arr[0] = 1;
        for (i = 2; i <= n; i++) {
            if (n % i == 0) {
                arr[j] = i;
                j++;
            }
        }
        return alert('The divisors of the number are: ' + arr);
    }
}

Divisors (nurmber);