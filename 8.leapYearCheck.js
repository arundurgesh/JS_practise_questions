// function isleap_year(year){
//   if(typeof year === 'string'){
//     throw new Error("Year cannot be a string")
//   }

//   if(year%4 === 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }


//else is not required here
// function isleap_year(year){
//   if(typeof year === 'string'){
//     throw new Error("Year cannot be a string")
//   }

//   if(year%4 === 0){
//     return true;
//   }
//     return false;
// }


// we can further shorten the code, it will show the same result
function isleap_year(year){
  if(typeof year === 'string'){
    throw new Error("Year cannot be a string")
  }
  return year%4 === 0;
}


console.log("isleapyear(2023)",isleap_year(2023));
console.log("isleapyear(2024)",isleap_year(2024));
console.log("isleapyear(2000)",isleap_year(2000));

// console.log("isleapyear(2000)",isleap_year('abcdds'));