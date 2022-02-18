function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   const cont = [];
   for(let i = 1; i <= 20; i++){
      cont.push(i);
   }
   return cont;
}

//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   const cont = [];
   for(let i = 1; i <= 20; i++){
    if(i % 2 ===0){
     cont.push(i);
    }
  }
  return cont;
}

//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
   for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
      cont.push(i);
    }
  }
  return cont; 
}

//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
  for(let i = 1; i <= 100; i++){
    if(i % 5 === 0){
      cont.push(i);
    }
  }
  return cont;
}

//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
  for(let i = 1; i <= 100; i++){
    let aux = i * i;
    cont.push(aux);
  }
  return cont; 
}

//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
   for(let i = 20; i >= 1; i--){
      cont.push(i);
   }
    return cont;
}

//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
  for(let i = 20; i >= 1; i--){
    if(i % 2 ===0){
    cont.push(i);
    }
  }
  return cont;
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
   for(let i = 20; i >= 1; i--){
     if(i % 2 !=0){
      cont.push(i);
    }
  }
  return cont;
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
  for(let i = 100; i >= 1; i--){
    if(i % 5 === 0){
      cont.push(i);
    }
  }
  return cont;
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  const cont = [];
  for(let i = 100; i >= 1; i--){
    let aux = i * i;
    cont.push(aux);
  }
  return cont; 
}

//call function squareNumbersBackwards