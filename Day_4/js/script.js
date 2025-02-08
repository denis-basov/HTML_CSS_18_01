// console.log('hello');

// let fname = 'Ivan';
// let age = 22;
// let hobby = 'Swim';

// console.log(fname);

/*
// поменять цвет текста заголовка через js
// 1. получить элемент
let head1 = document.getElementById('head-1');

// 2. изменить цвет
head1.style.color = 'red';
head1.style.background = 'blue';
*/

/*
// поменять цвет заголовка по клику на него
let head1 = document.getElementById('head-1');

// слушаем событие клика
head1.addEventListener('click', function(){
    console.log('Пользователь нажал на заголовок');
    console.log( Math.floor(Math.random() * 10) );
    
    //rgb(255, 0, 85)
    head1.style.color = 'rgb(0, 255, 26)';
});*/


/*
// поменять текст заголовка при нажатии на кнопку
let head1 = document.getElementById('head-1'); // заголовок
let btn1 = document.getElementById('btn-1'); // кнопка

// при нажатии на кнопку
btn1.addEventListener('click', function(){
    //изменить текст заголовка
    head1.textContent = 'Заголовок первого уровня';
    head1.style.color = 'rgb(0, 255, 26)';// меняем цвет
});
*/
/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));  */


/*
// получение данных от пользователя  
let loginEl = document.getElementById('login');// поле ввода
let loginError = document.getElementById('login-error'); // поле для вывода ошибки

// при переходе курсора из поля ввода
loginEl.addEventListener('blur', function(){
    let login = loginEl.value; // получаем введенный логин

    // если длина логина менее 3
    if(login.length < 3){
        // выводим в спан ошибку
        loginError.textContent = 'Логин слишком короткий';
        loginError.style.color = 'red';
    }else{
        loginError.textContent = '';
        loginError.style.color = 'black';
    }
});
*/