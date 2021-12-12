//////////////////////////
//-- Anagram checker --//
////////////////////////
function validAnagram(arg1, arg2 ){
  
  if(arg1.length !== arg2.length){
    console.log(" False: length does not match ");
    return false 
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val1 of arg1) {
    frequencyCounter1[val1] = (frequencyCounter1[val1] || 0) + 1
  }
  for (const val2 of arg2) {
    frequencyCounter2[val2] = (frequencyCounter2[val2] || 0) + 1
  }

  for (const key in frequencyCounter1) {
    if(!(key in frequencyCounter2)){
      console.log("false: key is not found in frequency counter 2")
      return false
    }
    

    if(frequencyCounter2[key] !== frequencyCounter1[key]){
      console.log("false: key in frequency counter 2  does not match key in frequency counter 1");
      return false
    }
  
}
console.log("Valid anagram")
return true

}

  validAnagram("", "")// true
  validAnagram("aaa", "aaa") // true 
  validAnagram(' aaz' , 'zza') // false;
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat", "car") // false) // false
  validAnagram(' awesome','awesom')// false
  validAnagram('amanaplanacanalpanama',' acanalmanplanpamana')//false
  


  //   other method to check 
  const validAnagram2 = (arg1, arg2) => {
    const lookUpObject = {};

    if(arg1.length !== arg2.length){
      console.log("failed length check");
      return false 
    }

      
    for (let x = 0; x < arg1.length; x++) {
      const letter = arg1[x];
      lookUpObject[letter] ? lookUpObject[letter] += 1 : lookUpObject[letter] = 1
    }

    for (let x = 0; x < arg2.length; x++) {
      const letter = arg2[x];
      
      if(!lookUpObject[letter]){
        console.log("current letter is not found ")
        return false
      }else{
        lookUpObject[letter] -= 1
      }
    }

    return true
  }



  validAnagram2("", "")// true
  validAnagram2("aaa", "aaa") // true 
  validAnagram2(' aaz' , 'zza') // false;
  validAnagram2('anagram', 'nagaram') // true
  validAnagram2("rat", "car") // false) // false
  validAnagram2(' awesome','awesom')// false
  validAnagram2('amanaplanacanalpanama',' acanalmanplanpamana')//false
  