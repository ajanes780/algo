//////////////////////////////
// #- Multiple Pointers -# //
////////////////////////////

//  takes a sorted array 
const sumZero = (arr) => {

  let left = 0;
  let right = arr.length-1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    
    if(sum === 0){
      console.log(` [arr[left], arr[right]]`,  [arr[left], arr[right]])
      return [arr[left], arr[right]];
    }else if(sum > 0){
      right--
    }else{
      left++
    }
  }

}

sumZero([-4,-3,-2,-2,0,1,2,3,10]) //[-3,3]