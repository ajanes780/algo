
const areThereDuplicates = (...arg) =>{
console.log(`arg`, arg)
  let leftPointer = 0 ;
//  pointer starts on the left  and moves pointer to the right to check for a match if no match move left pointer to the right one space 
  for (let x = 1 ; x < arg.length; x++){

    if( arg[leftPointer] !== arg[x]){
      leftPointer++
    } else if(arg[leftPointer] === arg[x]){
     
      console.log(`true`)
      console.log(`arg[leftPointer]:${arg[leftPointer]} , arg[x]:${arg[x]}`,)
      return true 
    } 
  }
}


// areThereDuplicates(1, 2 ,3 , 4 , 4 ) //true
// areThereDuplicates(1, 2, 1, 5)
//tru
// areThereDuplicates(3,5,6,3,9, 1)
areThereDuplicates("a", "b", "c" , "c" ,"z")