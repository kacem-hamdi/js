// Write a JavaScript function to repeat a string a specified times.
function repeatString(text, count) {
    return(text.repeat(count))
}
console.log(repeatString('Hi ', 6).trim()); // => 'HiHi'

// Write a JavaScript program to display the current day and time in the following format.
// Today is Wed Jun 23 2021
function date() {
    return('today is '+ Date().substring(0,15))
    
}
console.log(date());

// Write a JavaScript program to get the difference between a given number and 11
function num(n) {
  n=Math.abs(n-11);
    return(n)
}
console.log(num(18)); // => 7
console.log(num(1)); // => 10

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function test50(x, y) {
    if(x==50||y==50){
        return(true)
    }
    else if(x+y==50){return(true)}
    else{return (false)}
}
console.log(test50(20, 50)); // => true
console.log(test50(20, 10)); // => false
console.log(test50(50, 10)); // => true
console.log(test50(20, 30)); // => true

// Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
function positive_negative(x, y) {
    if(x>=0 && y<=0 ){
        return(true)
    }
    else if(y>=0 && x<=0 ){
        return(true)
    }
    else{return (false)}
}
console.log(positive_negative(2, 2)); // => false
console.log(positive_negative(-2, 2)); // => true
console.log(positive_negative(2, -2)); // => true
console.log(positive_negative(-2, -2)); // => false

// Write a JavaScript program to create a new string adding "Java" in front of a given string. If the given string begins with "Java" then return the original string.
function string_check(str) {
if(str.substr(0,4).toLowerCase()==='java'){
    return(str+'script')
}
else {return("javascript")}
}
console.log(string_check('JavaScript')); // => 'JavaScript'
console.log(string_check('Script')); // => 'JavaScript'

// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
function first_last(str) {
    const m=str.substr(1,str.length-2)
    return(str[str.length-1]+m+str[0])
}
console.log(first_last('a')); // => 'a'
console.log(first_last('ab')); // => "ba"
console.log(first_last('abc')); // => "cba"
console.log(first_last('oellh')); // => "hello"

// Write a JavaScript program to reverse a given string.
function string_reverse(str) {
 
  
reverse(str)
return(str)


}

console.log(string_reverse('Hello World!')); // => "!dlroW olleH"

// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
function replace(arr, old_value, new_value) {}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log('Original Array: ' + num); // Original Array: 1,2,3,2,2,8,1,9
console.log(replace(num, 2, 5)); // [1, 5, 3, 5, 5, 8, 1, 9]
