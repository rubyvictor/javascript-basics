var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
// function hello() {
//   return "hello world";
// }

// assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
// function greet(personName){
//  if (personName != null){
//    return "hello "+personName; 
//  } else {
//    return "hello world";
//  }
// }

// assertEquals(greet('tom'), 'hello tom')
// assertEquals(greet(), 'hello world')
// assertEquals(greet("vic"),"hello vic");
// assertEquals(greet(),"hello world");

// greet("vic");
// greet();
/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
// function add2Numbers(num1,num2){
//   return num1 + num2
// }
// // assertEquals(add2Numbers(1, 1), 2)
// // assertEquals(add2Numbers(100, 1), 101)
// assertEquals(add2Numbers(1,1),2);
// assertEquals(add2Numbers(100,1),101)

// add2Numbers(1,1);
// add2Numbers(100,1);
/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted
function invertCase(someString){
  var str = "";
  for (var i=0;i<someString.length;i++){
    


  }
}

assertEquals(invertCase("Hello"),"hELLO");
assertEquals(invertCase("hELLO wORLD"),"Hello World");
// assertEquals(invertCase('Hello'), 'hELLO')
// assertEquals(invertCase('hELLO wORLD'), 'Hello World')
