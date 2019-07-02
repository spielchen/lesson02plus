var num = 266219;

var splitNum = Number( eval(num.toString().split('').join('*')) );
console.log(splitNum);
console.log(typeof(splitNum));
var step = splitNum**3;
console.log(step);

var stringNum = step.toString()[0]+step.toString()[1];
console.log("вывести первые две цифры: "+ stringNum);
