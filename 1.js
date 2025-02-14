const friends = ["Leonardo", "Tesla", "Tony", "Bruce", "Vincenzo"];

// console.log(friends.length);

for(let i = 0;i < friends.length; i++) {
  const element = friends[i];
  if(element==="Tony"){
    // console.log("Found Tony");
    // break;
    continue;
  }
  console.log(element);
}
// for(let i = 0;i < friends.length; i++) {
//   // console.log(friends[i]);
//   const element = friends[i];
//   console.log(element);
// }