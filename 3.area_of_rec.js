// function area(l,b) {
//   const area = l*b;
//   console.log('area is', area)
// }
// area(5,6);
// area(200,350);
// area(-2,300);

//area cannot be -ve

function area(length, width) {
  if(length<0){
    throw new RangeError('Length should be a positive number')
  }
  if(width<0){
    throw new RangeError('width should be a positive number')
  }
  const area = length*width;
  console.log('area of a rectangle is', area)
}
area(10,20);
area(10,-20);
area(-10,20);
area(10,0);