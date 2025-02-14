// const num = 30;

// console.log(num % 3==0 || num%5==0);

let temp = [];
for(let i = 1;i<51;i++){
  if(i%3==0 && i%5==0){
    temp.push(i);
  }
}
console.log(temp);