

let num = prompt('Введите число');

if (num % 2 == 0) {
    alert('Число четное');
} else {
    alert('Число нечетное');
}

let count = prompt('Сколько раз вывести Hello, World!');

for (let i = 0; i < count; i++) {
    document.body.innerHTML += 'Hello, World! <br>';
}