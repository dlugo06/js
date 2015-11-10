console.log("Hello, World");


var input = undefined;


if (input) {
  console.log("Input: " + input);
}

else {
  console.log("Input is not defined");
}

var message = input ? "Got some input" : "no input" ;

console.log(message)

var value = 0;
switch (value) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("one");
    break;
  default:
    console.log("something else");
    break;
}

var x = 0;
while (x < 10) {
  console.log(x);
  x++;
}

var a = 0;
while (true) {
  console.log(a);
  if (a >= 10) {
    break;
  }

  else {
    a++;
  }
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

function aFunction(args) {
  console.log("aFunction");
  console.log(args);
}

aFunction([1, 2, 3]);
aFunction("hi");

var bFunction = function(args) {
  console.log("bFunction");
  console.log(args);
  return "Hello"; //You must epxlicitly return a value otherwise the retunr value will be "undefined"
};

var returnValue = bFunction("Yo");

console.log(returnValue)

var unlimitedArguments = function(args) {
  console.log("args variable: " + args);
  for (var i = 0; i < arguments.length; i++) {
    console.log("Arguments MAGIC: "+ arguments[i]);
  }
};

unlimitedArguments(1, 2, 3, 4);


var addAll = function() {
  var sum = 0; //you need to specify the initial value to zero to avoid NaN error (when adding)
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(addAll(2, 2, 2));


//HOISTING
// When you have a scope, all of the variable declarations move to the top of the scope.
{
  console.log(some_value === undefined)
  var some_value = 3
}

{
  var some_value;
  console.log(some_value === undefined);
  some_value = 3;
}
