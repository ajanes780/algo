const countUniqueValues = (arr) => {
  
  let left = 0
  for (let x = 0; x < arr.length; x++) {
    
    if( arr[x] !==arr[ x+1]){
      left++
    } else {
      arr[x] = arr[x+1]
    }
  
  }
  console.log(`left`, left)
  return left
}

countUniqueValues([1,1,1,1,1,2])//2
countUniqueValues([1,2,3,4,4,4,7,12,12,13])//7
countUniqueValues([])//0
countUniqueValues([-2,-1,-1,0,1])//0
