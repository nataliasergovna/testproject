"use strict";

  const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

    const personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    };

        if (personalMovieDB.count<=10) {
             alert('Мало!');
        } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {

                 alert('Вы классический зритель!');
        } else if (personalMovieDB.count>=30) {

                    alert('Да Вы киноман!');
        } else {
            console.log('ERROR');
        }

    

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

        console.log(personalMovieDB);






//hdfgkdhglghlg
// 1)

//  let numberOfFilms = +prompt('Сколько фильмов посмотрели?', 0);

//  //2)

//  const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };


// //3)
// let film = prompt('Последний просмотренный фильм?', 'Шерлок'),
//     grade = prompt('Оцените фильм', 'от 1 до 10');

//     personalMovieDB.movies[film] = grade; 

//     console.log(personalMovieDB);
