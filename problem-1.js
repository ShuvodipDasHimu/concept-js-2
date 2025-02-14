myGrade = 70;

if(myGrade >= 80 && myGrade <= 100){
  console.log("You got A+!");
} else if(myGrade >=70 && myGrade < 80){
  console.log("You got A!");
} else if(myGrade >= 60 && myGrade < 70){
  console.log("You got A-.");
} else if(myGrade >= 50 && myGrade < 60){
  console.log("You got B.");
} else if(myGrade >= 40 && myGrade < 50){
  console.log("You got C.");
} else if(myGrade >= 33 && myGrade < 40){
  console.log("You got D.");
} else if(myGrade < 0 || myGrade > 100){
  console.log("That's not within Grade range !!");
} else {
  console.log("You failed.");
}