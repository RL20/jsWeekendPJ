

function peopleInTheBus(arr){
  let left=0;
  for(element of arr){
     left += element[0]-element[1];
  }
  return left;

}
const stops1 = [[1,0],[3,1]] // people left: 3
const stops2 = [[3,0], [0,3], [1,1]] //people left: 0
console.log(peopleInTheBus(stops1));
console.log(peopleInTheBus(stops2));
