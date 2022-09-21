const LinkText = document.querySelector('#link');
LinkText.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Нажатие есть, а перехода нет');
    const userText = prompt('Введите текст');
    const LinkText = document.querySelector('#link');
    LinkText.textContent = userText;
    console.log('Текст в блоке с id link изменён на', userText);

});

