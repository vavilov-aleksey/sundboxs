// Пример того как работает prototype

var Grandfather = function () {}; // Grandfather Constructor
Grandfather.prototype.color = 'green';
var Father = function () {}; // Constructor Father
Father.prototype = new Grandfather (); // This is a simple but not the best version of protypical inheritance
var Son = function () {}; // Son Constructor
Son.prototype = new Father (); // Similarly
var u = new Grandfather (); // Grandfather class instance
var f = new Father (); // Instance "class" Father
var s = new Son (); // Son instance
// Initially all green
console.log ([u.color, f.color, s.color]); // ["green", "green", "green"]
// Grandfather decided to change his color and color of offspring
Grandfather.prototype.color = 'blue';
console.log ([u.color, f.color, s.color]); // ["blue", "blue", "blue"]
// Father decided to return everything for himself and his posterity
Father.prototype.color = 'green';
// Although he could do it like this:
// Grandfather.prototype.color = 'green';
console.log ([u.color, f.color, s.color]); // ["blue", "green", "green"]
// There's no point
Grandfather.prototype.color = 'blue';
console.log ([u.color, f.color, s.color]); // ["blue", "green", "green"]
// The son decided not to take an example from Grandfather and changed only his own property
s.color = 'black'; // Change our own property that does not affect the prototype chain
console.log ([u.color, f.color, s.color]); // ["blue", "green", "black"]
var SonsSon = function () {}; // Constructor SonsSon
SonsSon.prototype = new Son (); // Similarly
var ss = new SonsSon (); // SonsSon "class" instance
// Son of the son inherited from the Father
console.log ([u.color, f.color, s.color, ss.color]); // ["blue", "green", "black", "green"]

// Оригинал статьи https://medium.com/@alexmaisiura/tips-and-tricks-that-you-may-need-to-know-when-you-work-in-javascript-q-a-799ce3c4b4d2
