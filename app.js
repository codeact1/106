

function sayHello(){
    let message ="Hello there!";
    console.log(message);
}

function sayHi(name){
    console.log("hi" + name);

}

function sum(num1, num2){

    let total = num1 + num2;
    console.log(total);
    return total;
}

function testArray(){

    let numbers = [121,4,1,45,23,65,23,8,14,84,92,34,89,1,231,9,64];

    //access by index
    console.log(numbers[0]);  //first position

    //add new elements
    numbers.push(99); //add 99 at the end

    //replace
    numbers[0] = 42;

    //travel the array
    for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }

    //1 -the number of elements in the array
    console.log(numbers.length);

    //2 - the sum of all the number in the array
    let total = 0;
    for(let i=0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log("the total is:" + total);
}
function testArray2(){
//console logs numbers from 0 to 20

    for(let x=0; x <= 20; x++) {// < 21 is the same thing
        if(x != 7 && x != 13 ){ //if x is not 7 and not 13
            console.log(x);
        }
    }   

}

function init(){

    //at this point ALL the HTML has been rendered
    console.log("Intro page loaded");

    sayHello();

    let firstName = "John";
    sayHi(firstName);

    let result = sum(21, 21);
    console.log(result);

    testArray();

    testArray2();

}



//when the browser finish, exec init function
window.onload = init;

console.log("3");