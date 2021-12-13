const countUniqueValues = (arr) => {
  if(arr.length === 0 ){
    console.log("0")
    return 0
  } 
  let leftPointer = 0
  //  start the loop one place to the right
  for (let rightPointer = 1 ; rightPointer  < arr.length; rightPointer++) {
      // compare left pointer to right pointer 
    if( arr[leftPointer] !== arr[rightPointer]){
      leftPointer++
      arr[leftPointer] = arr[rightPointer]
  
    }
  }
  //  return left pointer +1 because its based on zero index
  console.log(`leftPointer`, leftPointer+1)
return leftPointer+1
}
countUniqueValues([1,1,1,1,1,2])//2
countUniqueValues([1,2,3,4,4,4,7,12,12,13])//7
countUniqueValues([])//0
countUniqueValues([-2,-1,-1,0,1])//0
