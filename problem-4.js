let leapYearCheck = 2100;

if(leapYearCheck % 4 === 0 && leapYearCheck % 100 !== 0){
  console.log(leapYearCheck, "is a leap year.");
}else if(leapYearCheck % 100 === 0 && leapYearCheck % 400 === 0){
  console.log(leapYearCheck, "is a leap year.")
}