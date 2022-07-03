import style from './main.css';
import component from './component.js';
// import { Chance } from 'chance';
import TestingChance from 'chance';

const chanceObj = new TestingChance();

// const Chance = require('chance');

// console.log(chance.word({ syllables: 3 }));
// console.log(chance);
console.log('TestingChance', chanceObj.age());

// TestingChance;

console.log('¡Hola!');
console.log('yooo');

// console.log('adios');
document.body.append(component());
