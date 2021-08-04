/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
     movies : {},
    actors : {},
    genres : [],
     privat : false
};

function showMyDB (a) {
    if (!a) {
        console.log(personalMovieDB);
    } else {
        console.log('TRUE');
    }
}

showMyDB(personalMovieDB.privat);
        

function detectPersonalLevel() {
    if (personalMovieDB.count<=10) {
        alert('Мало!');
   } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {

            alert('Вы классический зритель!');
   } else if (personalMovieDB.count>=30) {

               alert('Да Вы киноман!');
   } else {
       console.log('ERROR');
   }

}    

detectPersonalLevel();

   

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
       
        let film = prompt('Последний просмотренный фильм?', 'Шерлок'),
            grade = prompt('Оцените фильм', 'от 1 до 10');
        
            if (film != null && grade !=null && film != '' && grade != '' && film.length < 50) {

                personalMovieDB.movies[film] = grade; 
                console.log('DONE');

            } else {
                console.log('ERROR');
                 i--;
                               
            }
       
    }
}

rememberMyFilms();


function writeYourGenres() {
    for (let i=1; i<4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);;
    }

}

writeYourGenres();

console.log(personalMovieDB);