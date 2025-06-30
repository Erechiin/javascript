import { createElement } from "react";

const titulo = createElement('h1',null,'ola react') // esse era o jeito antigo p adicionar algo no html
const titulo2 = <h2>ola react!</h2> // esse é o jeito mais atual, e por baixo dos panos ele faz o createElement, mas dessa forma é mais facil. -> jsx

console.log(titulo)
console.log(titulo2)