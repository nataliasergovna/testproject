"use strict";

// 1)

 let numberOfFilms = +prompt('Сколько фильмов посмотрели?', 0);


//2)

//  const personalMovieDB = {
//      count : numberOfFilms,
//      movies : {
//         filemName : '',
//         gradeFilm : 0
//      },
//      actors : {},
//      genres : [],
//      privat : false
//  };


//  //3)
//  personalMovieDB.movies.filemName = prompt('Последний просмотренный фильм?', 'Шерлок');
//  personalMovieDB.movies.gradeFilm = prompt('Оцените фильм', 'от 1 до 10');


 //2)

 const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


//3)
let film = prompt('Последний просмотренный фильм?', 'Шерлок'),
    grade = prompt('Оцените фильм', 'от 1 до 10');

    personalMovieDB.movies[film] = grade; 

    console.log(personalMovieDB);
