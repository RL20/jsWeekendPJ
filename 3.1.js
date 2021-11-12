

function nb_year(pO, percent, aug, p){
  let years=0;
  for(let i=0;pO<p;i++){
    pO=pO*(1+percent/100)+aug;
    years+=1;
  }

  return years;

}
console.log(nb_year(1500, 5, 100, 5000)) //-> 15
console.log(nb_year(1500000, 2.5, 10000, 2000000)) //-> 10

