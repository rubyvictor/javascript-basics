var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function to list the properties of a JavaScript object. Go to the editor

var person = {
  name: "Tom Hanks",
  age: 50,
  rollno: 12
};

function listProperties(person) {
  var propertyName = Object.getOwnPropertyNames(person);
  return propertyName.toString();
}

assertEquals(listProperties({name: 'Tom Hanks'}), 'name')
assertEquals(listProperties({name: 'Tom Hanks', age: 50, rollno: 12}), 'name age rollno')

// Sample Output: name,sclass,rollno

/* ---------------------- EXERCISE 2 ---------------------- */

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter: The Prisoner of Azkaban",
    isAvailable: false
  }
];
console.log(books.title);
// 2.1 Define a function listTitles(booksArray) that takes in an array of book objects and returns an array of titles (strings)
function listTitles(booksArray) {
 var result = [];
  for (var property in books){
   var titles = books[property].title.toString();
   result.push(titles);
 }
 return result;
}

assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.2 Define a function listAuthors(booksArray) that takes in an array of book objects and returns an array of authors (strings)

function listAuthors(booksArray) {
var result = [];
for (var property in books) {
  var authors = books[property].author.toString();
  result.push(authors);
}
return result;

}

assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

// 2.3 Define a more general function listValues(booksArray, key) that takes in an array of book objects and returns an array of authors (strings)

function listValues(booksArray, key) {}

// assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
// assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter: The Prisoner of Azkaban'])

// 2.4 Define a function getAvailableBooks(booksArray) that returns a list of available books
function getAvailableBooks(booksArray){
  var result = [];
  for (var property in books) {
    if (books[property].isAvailable == "true") {
    var titles = books[property].title.toString();
    result.push(titles);
    }
  }
  return result;
}
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])

/* ---------------------- EXERCISE 3 ---------------------- */
/* 3.1 Define an object named fluffycat with the following properties/methods:
    - name: fluffy
    - type: pet
    - makeSound() // return 'meow!'
    - introduceSelf() // return 'meow! my name is fluffy'
*/
var fluffycat = new Object();
fluffycat.name = "fluffy";
fluffycat.type = "pet";
fluffycat.makeSound = function() {
  return "meow!";
},
fluffycat.introduceSelf = function(){
return "meow!"+" my name is "+this.name;
},


assertEquals(fluffycat.name, "fluffy");
assertEquals(fluffycat.type, "pet");
assertEquals(fluffycat.makeSound(), "meow!");
assertEquals(fluffycat.introduceSelf(), "meow! my name is fluffy");
