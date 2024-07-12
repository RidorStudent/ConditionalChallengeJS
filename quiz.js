/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
correct = 0;



// 2. Store the rank of a player
rank = "not know"

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

answer1 = prompt('Name the programin Language that you are learning')
if(answer1.toUpperCase() == "JAVASCRIPT"){
  correct += 1
  console.log(answer1)
  console.log(correct)
}

answer2 = prompt('What is the programin Language for web')
if(answer2.toUpperCase() == "HTML"){
  correct += 1
  console.log(answer2)
  console.log(correct)
}

answer3 = prompt('what language we use for styling web')
if(answer3.toUpperCase() == "CSS"){
  correct += 1
  console.log(answer3)
  console.log(correct)
}

answer4 = prompt('What is the name of the college where you study in')
if(answer4.toUpperCase() == "DOUGLAS"){
  correct += 1
  console.log(answer4)
  console.log(correct)
}

answer5 = prompt('What is the name of city of your college')
if(answer5.toUpperCase() == "NEW WESTMINISTER"){
  correct += 1
  console.log(answer5)
  console.log(correct)
}




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if(correct >= 5){
  rank = 'Gold'
}
else if(correct >= 3){
  rank = 'Silver'
}
else if(correct >=1){
  rank = 'Bronze'
}
else {rank = 'No crown'}


// 6. Output results to the <main> element

document.querySelector('main').innerHTML= '<h1>Your score is: '+correct+' of 5 <br> Your rank is : '+rank