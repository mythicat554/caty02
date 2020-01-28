let votes = ["A","B","C","D","E","D"];

//returns an array that contains the number of votes each candidate received
function numVotes(votes){
  let numArray = [0,0,0,0,0];

  let isEqual;
  let isEqual1;
  let isEqual2;
  let isEqual3;
  let isEqual4;

  for (let i=0; i<votes.length; i++){
    if (votes[i]=="A"){
      numArray[0]++;
    }
    if (votes[i]=="B"){
      numArray[1]++;
    }
    if (votes[i]=="C"){
      numArray[2]++;
    }
    if (votes[i]=="D"){
      numArray[3]++;
    }
    if (votes[i]=="E"){
      numArray[4]++;
    }
  }
  return(numArray);
}

//returns which candidate won election
function winner1(votes){
  let max=0;
  let index=0;
  let winner="";
  let numArray= numVotes(votes);

  for (let i=0; i<numArray.length; i++){
    if (numArray[i]>max){
      max = numArray[i];
      index=i;
    }
  }

//matches the index with the candidate letter
  switch (index) {
    case 0:
      winner="A";
      break;
    case 1:
      winner="B";
      break;
    case 2:
      winner="C";
      break;
    case 3:
      winner="D";
      break;
    case 4:
      winner="E";
      break;
  }
  return(winner);
}

//finds how many additional votes each candidate would need
function missingVotes(votes){
  let numArray=numVotes(votes);
  let difference = [0,0,0,0,0];

  //find max value of votes
  let max=0;
  for (let i=0; i<numArray.length;i++){
    if (numArray[i]>max){
      max = numArray[i];
    }
  }

  //finds the difference between max value and value they received
  for (let i=0; i<numArray.length; i++){
    difference[i]=max-numArray[i];
  }
  return(difference);
}

console.log(numVotes(votes));
console.log(winner1(votes));
console.log(missingVotes(votes));
