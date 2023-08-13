const animals = ["dog", "cat","antelope"];
const animalstring = animals.join(",");
console.log(animalstring)

const wordsstring = "hello-ope";
const wordsArray = wordsstring.split("-");
console.log(wordsArray)

const firstname = "opeyemi";
const greeting = "Hello"  + " " + firstname;
console.log(greeting)

const hobby = "singing"
const sentence = "I love " + hobby;
console.log(sentence)

const isWeekend = true;
if(isWeekend) {
    console.log("Rest period");
}

const number = 4
if(number %2 ===0){
    console.log("number is even");
}else{
    console.log("number is odd");
}
const username = "yemi";
const message = "welcome";
const fullmessage = message + " " + username;
console.log(fullmessage);


const length = 7;
const width = 4;
const area = length * width;
console.log("the area of the rectangle is", + area);

const fruits = ["orange" , "banana"];
const vegetable = ["leaf", "carrot"];
const combineArray = fruits.concat(vegetable);
console.log(combineArray);

const numbers= [1,6,7,8,9];
const numberstrings= numbers.join(',');
console.log(numberstrings);

const fruit = ['mango', 'pine', 'apple', 'grape'];
fruit.splice = (1,2);
console.log(fruit)

