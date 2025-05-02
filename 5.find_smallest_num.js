// function find_smallest_num(a,b,c){
//   if(a<b && a<c){
//     return a;
//   }
//   else if(b<c && b<a){
//     return b;
//   }
//   else if(c<a && c<b){
//     return c;
//   }
//   else{
//     return a; //if all three are equal
//   }
// }

//above code fails for 
//console.log('given num is biggest: ', find_smallest_num(4,3,3))



function find_smallest_num(a,b,c){
  let smallestNumber = a;
  if(b < smallestNumber){
    smallestNumber = b;
  }
  if(c < smallestNumber){
    smallestNumber = c;
  }
  return smallestNumber;
}

console.log('given num is biggest: ', find_smallest_num(3,1,6))
console.log('given num is biggest: ', find_smallest_num(-1,-6,9))
console.log('given num is biggest: ', find_smallest_num(3,3,3)) //if all three are same
console.log('given num is biggest: ', find_smallest_num(3,3,1))
console.log('given num is biggest: ', find_smallest_num(3,4,3))
console.log('given num is biggest: ', find_smallest_num(4,3,3))