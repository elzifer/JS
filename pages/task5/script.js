const myinput = document.querySelector('input');
const mylog = document.querySelector('#duplicateField');
let mybutton = document.querySelector('button');

myinput.addEventListener('input', updateDuplicateField);
mybutton.addEventListener('click', getValue); 
mybutton.addEventListener('click', clearText);
mybutton.addEventListener('click', updateDuplicateField);

function updateDuplicateField(e) {
    mylog.textContent = e.target.value;
};

function clearText() {
    document.querySelector('input').value = ""
}

function getValue(event) {
    event.preventDefault()
    console.log('Текст из формы \"', document.querySelector('input').value, '\"' );
}

