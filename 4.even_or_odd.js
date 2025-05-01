// function EvenOrOdd(a){
//   if(a%2==0){
//     console.log('number is even')
//   }
//   else if(a%2!=0){
//     console.log('number is odd')
//   }
// }


// function checkIfEvenOrOdd(a){
//   const remainder = a%2;
//   if(remainder === 0){
//     return "even"
//   }
//   else{
//     return "odd"
//   }
  
// }
// console.log('given number is :', checkIfEvenOrOdd(242342))

function checkIfEvenOrOdd(a){
  return a%2 === 0 ? "even":"odd";
}
console.log('given number is ',checkIfEvenOrOdd(52));

