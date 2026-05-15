

let num = prompt('Введите число');

if (num === null || num.trim() === '') {
    alert('Ввод отменен или пустая строка');
} else if (isNaN(num)) {
    alert('Вы ввели не числовое значение!');
} else if (num % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

let count = prompt('Сколько раз вывести Hello, World!');

if (count !== null && count.trim() !== '' && !isNaN(count)) {
    for (let i = 0; i < count; i++) {
        document.body.innerHTML += 'Hello, World! <br>';
    }
}