let randomNum = Math.floor((Math.random() * 5) + 1)
// 1a

// 1b
if (randomNum >= 4){
  console.log("Equal to or more than 4");
} else if (randomNum >= 2){
  console.log("Equal to or more than 2");
} else {
  console.log("Equal to 1");
}


if (randomNum != 3 && randomNum != 5){ // Correct
  console.log("Not equal to 3 AND not equal to 5");
}


if (randomNum === 2 || randomNum === 4){
  console.log("Equal to 2 OR equal to 4");
}

