import { entrance, egress, type } from './zoo.js';

const cat = { type: 'cat', name: 'Fluffy' };
const dog = { type: 'dog', name: 'Rover' };
const whale = { type: 'whale', name: 'Moby Dick' };

entrance();
console.log(`I have a ${type(cat)}.`);
console.log(`I have a ${type(dog)}.`);
console.log(`I have a ${type(whale)}.`);
egress();












/*

import { entrance, egress, type as animalType } from './zoo.js';

const cat = { type: 'cat', name: 'Fluffy' };
const dog = { type: 'dog', name: 'Rover' };
const whale = { type: 'whale', name: 'Moby Dick' };

entrance();
console.log(`I have a ${animalType(cat)}.`);
console.log(`I have a ${animalType(dog)}.`);
console.log(`I have a ${animalType(whale)}.`);
egress();



 */