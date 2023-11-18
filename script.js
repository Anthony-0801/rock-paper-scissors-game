// declare the function 
const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
    
  // Usage 
  const myArray = ["Rock", "Paper", "Scissors"]; 
  const shuffledArray = shuffle(myArray); 
  
  console.log(shuffledArray); 
  console.log(shuffledArray);