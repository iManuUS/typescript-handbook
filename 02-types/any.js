"use strict";
(() => {
    //* Any
    //! Tratar de usar el tipo any la menor cantidad de veces posibles
    let hero = 123;
    //Cuando se crea una variable y no se asigna un valor 
    //por defecto toma el tipo any
    let exists;
    let power;
    //El any da más flexibilidad, pero pierda gran cantidad
    //de beneficios que posee el tipado
    hero = 'Dr Manuel';
    console.log(hero.charAt(0)); //No intellisense
    hero = 15.46465;
    console.log(hero.toFixed(2)); //No intellisense
    console.log(exists);
    console.log(power);
})();
