
const sameFrequency = (arg1, arg2) =>{

  const element1 = arg1.toString()
  const element2 = arg2.toString()

  if (element1.length !== element2.length) return false 

  let counter1 = {}
  let counter2 = {}
  for (const letter of element1) {
  
    counter1[letter] =  (counter1[letter] || 0  )  +1
  }
  for (const letter of element2) {
    counter2[letter] =  (counter2[letter] || 0 ) +1
  }
  
  for (const key in counter1) {
    if(!(key in counter2)){
      return false
    }

    if (counter2[key] !== counter1[key]){
      return false
    }

  }
  console.log("true");
  return true 
}


sameFrequency(182,281)