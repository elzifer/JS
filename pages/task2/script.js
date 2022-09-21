const consoleLog = document.querySelector('#myconsoleLog');

myconsoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
});

const myalert = document.querySelector('#myalert');

myalert.addEventListener('click', () => {
    alert('Используется для вывода результата обработки или любой другой информации на экран пользователя при помощи специального окна.');
});

const myprompt = document.querySelector('#myprompt');

myprompt.addEventListener('click', () => {
    alert('Даёт JS возможность выводить специальное окно, куда пользователь вводит какое-то значение. prompt только присваивает значение, но никак его не обрабатывает.');
});

