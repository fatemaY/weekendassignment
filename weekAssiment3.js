/*                                   Ex 1.1                                   */
/* -------------------------------------------------------------------------- */
function booleanToString(value) {
  return value ? "Yes" : "No";
}

/* ---------------------------------- Test ---------------------------------- */
console.log(booleanToString(true)); 
console.log(booleanToString(false)); 
console.log(booleanToString(1)); 
/*                                   Ex 2.1                                   */
/* -------------------------------------------------------------------------- */
function sumTwoLowest(arr) {
arr.sort((a, b) => a - b);
  const sum = arr[0] + arr[1];

return sum;
}
/* ---------------------------------- Test ---------------------------------- */
const numbers1 = [19, 5, 42, 2, 77];
const numbers2 =[10, 343445353, 3453445, 3453545353453]; 
console.log(sumTwoLowest(numbers1)); 
console.log(sumTwoLowest(numbers2)); 
/*                                   Ex 2.3                                   */
/* -------------------------------------------------------------------------- */
function findNextSquare(num) {
const sqrt = Math.sqrt(num);
  if (Number.isInteger(sqrt)) {
    const nextSquare = Math.pow(sqrt + 1, 2);
    return nextSquare;
  } 
  else {
  return -1;
  }
}
/* ---------------------------------- Test ---------------------------------- */
console.log(findNextSquare(121));
console.log(findNextSquare(625)); 
console.log(findNextSquare(114));  
console.log(findNextSquare(9));  
/*                                   Ex 2.4                                  */
/* -------------------------------------------------------------------------- */
function findUniq(arr) {
arr.sort((a, b) => a - b);
  if (arr[0] === arr[1]) {
  return arr[arr.length - 1];
}
else {
  return arr[0];
}
}
/* ---------------------------------- Test ---------------------------------- */
console.log(findUniq([1, 1, 1, 2, 1, 1]));    
console.log(findUniq([0, 0, 0.55, 0, 0]));      
console.log(findUniq([5, 5, 5, 5, 5, 6]));    

/*                                   Ex 2.5                                   */
/* -------------------------------------------------------------------------- */
function summation(num){
while (num>0)
 return num+summation(num-1);
return 0;
}
/* ---------------------------------- Test ---------------------------------- */
sum=summation(2);
console.log(sum);
/*                                   Ex 2.6                                  */
/* -------------------------------------------------------------------------- */
function centuryFromYear(year){
centry=year/100;
if(year % 100 ===0)
 return centry;
return Math.ceil(centry);
}
/* ---------------------------------- Test ---------------------------------- */
centry=centuryFromYear(1800);
console.log(centry);
/*                                   Ex 2.7                                   */
/* -------------------------------------------------------------------------- */
function basicOp(operation, value1, value2) {
switch (operation) {
  case '+':
    return value1 + value2;
  case '-':
    return value1 - value2;
  case '*':
    return value1 * value2;
  case '/':
    return value1 / value2;
  default:
    return "Invalid operation";
}
}
/* ---------------------------------- Test ---------------------------------- */
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5)); 
console.log(basicOp('/', 49, 7));
/*                                   Ex 4.1                                   */
/* -------------------------------------------------------------------------- */
function Fibonacci(arr,length){
if(arr.length===0 ||length<2)
 return "invalid input!";
for (let i=2 ;i<length ;i++)
    arr[i]=arr[i-1]+arr[i-2]
 return arr;

}
/* ---------------------------------- Test ---------------------------------- */
fibArr= Fibonacci([0,1],1);
console.log(fibArr);
/*                                   Ex 5.1                                   */
/* -------------------------------------------------------------------------- */
function straightforward(str){
if(str.length <= 2)
  return str;
let newStr=str.slice(1,-1);
  return newStr;
}
/* ---------------------------------- Test ---------------------------------- */
console.log(straightforward("STRINGS"));
console.log(straightforward("NO"));

/*                                   Ex 5.2                                   */
/* -------------------------------------------------------------------------- */
function repeatStr(count, src) {
if(src.length==0 || count<0)
 return "invalid input!"
let result = "";
  for (let i = 0; i < count; i++) {
    result += src;
}
return result;
}
/* ---------------------------------- Test ---------------------------------- */
console.log(repeatStr(5,""));
console.log(repeatStr(5,"Hello"));
/*                                   Ex 5.3                                   */
/* -------------------------------------------------------------------------- */
function toCamelCase(str) {
const words = str.split(/[-_]/);
  for (let i = 1; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
  return words.join('');
}
/* ---------------------------------- Test ---------------------------------- */
console.log(toCamelCase("hello_world"));        
console.log(toCamelCase("camel-case-example")); 
console.log(toCamelCase("UpperCase-Word"));     
/*                                   Ex 5.5                                  */
/* -------------------------------------------------------------------------- */
function convertToInitials(str) {
const words = str.split(' ');
const initials = words.map(word => word[0].toUpperCase()).join('.');
return initials;
}
/* ---------------------------------- Test ---------------------------------- */
console.log(convertToInitials("John Doe")); 
console.log(convertToInitials("Alice Johnson"));
console.log(convertToInitials("James Brown"));
/*                                   Ex 5.6                                   */
/* -------------------------------------------------------------------------- */
function maskify(str) {
if (str.length > 4) {
  const maskedPart = '#'.repeat(str.length - 4);
  const lastFour = str.slice(-4);
  return maskedPart + lastFour;
} 
else {
  return str;
}
}
/* ---------------------------------- Test ---------------------------------- */
console.log(maskify("4556364607935616"));  
console.log(maskify("1234"));              
console.log(maskify("abc"));               
console.log(maskify("Nananananananananananananananana Batman!"));  
console.log(maskify("Skippy"));
/*                                   Ex 5.7                                  */
/* -------------------------------------------------------------------------- */
function shortestWord(str){
const words = str.split(' ');
let shortestLength = words[0].length;
// console.log(shortestLength );
for(let word of words ){
    if(word.length < shortestLength ){
       shortestLength=word.length;
    }
}
return shortestLength;

}
/* ---------------------------------- Test ---------------------------------- */
console.log(shortestWord("Alice Johnson"));
console.log(shortestWord("The quick brown fox")); 
console.log(shortestWord("Hello world"));         
console.log(shortestWord("1"));

/*                                   Ex 6.1                                   */
/* -------------------------------------------------------------------------- */
function accum(str){
let accumStr="";
let j=0;
for(let char of str){
    accumStr= accumStr+ char.toUpperCase();
  for(let i=0; i<str.indexOf(char); i++){
    accumStr= accumStr+ char.toLowerCase();
}
if(str.indexOf(char)< str.length-1){
accumStr= accumStr+"-";
}
}

return accumStr;
}
/* ---------------------------------- Test ---------------------------------- */
console.log(accum("abcd"));
console.log(accum("RqaEzty")) ;
console.log(accum("cwAt"));
/*                                   Ex 6.2                                   */
/* -------------------------------------------------------------------------- */
function countDuplicates(str) {
const charCounts = {};
const lowerStr = str.toLowerCase();
for (const char of lowerStr) {
  if (/[a-z0-9]/.test(char)) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
}
  let duplicatesCount = 0;
  for (const char in charCounts) {
  if (charCounts[char] > 1) {
    duplicatesCount++;
    console.log(char + " occurs " + charCounts[char]+ " times");

  }
}
  if (duplicatesCount<2){
    console.log(" no characters repeats more than once");
    return 0;
  }
return duplicatesCount;
}
/* ---------------------------------- Test ---------------------------------- */

//   console.log(countDuplicates("abcde"));          // Output: 0 (no duplicates)
//   console.log(countDuplicates("aabbcde"));        // Output: 2 (a and b are duplicates)
//   console.log(countDuplicates("Hhello, World!"));  // Output: 3 (l, o,h are duplicates)
console.log(countDuplicates("aA11"));
/*                                   Ex 6.4                                   */
/* -------------------------------------------------------------------------- */
function isIsogram(str) {
const lowerStr = str.toLowerCase();
const charCounts = {};
  for (const char of lowerStr) {
  if (/[a-z]/.test(char)) {
    if (charCounts[char]) {
      return false;
    }
    charCounts[char] = true;
  }
}
return true;
}
/* ---------------------------------- Test ---------------------------------- */
console.log(isIsogram("Dermatoglyphics")); 
console.log(isIsogram("aba"));             
console.log(isIsogram("moOse"));           
console.log(isIsogram(""));                




