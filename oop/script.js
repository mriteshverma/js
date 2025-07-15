'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}


const hitesh = new Person('Hitesh', 1991);


Person.prototype.calcAge = function() {
    return 2025 - this.birthYear
}
Person.prototype.speics = 'Homo';
console.log(hitesh.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(hitesh))
console.dir(Person.prototype.constructor)