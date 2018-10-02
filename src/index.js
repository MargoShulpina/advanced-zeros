module.exports = function getZerosCount(number, base) {
  let multipliers = [];
  let stepen = [];
  let arrcount = [];
  let n = 0;
  
  for (let i=2;i<=base+1;i++){        //Находим простые множители
    while (base % i == 0){
      multipliers.push(i);
      base = base/i
    }
  }
  for (let a = 0; a < multipliers.length;a++){   //Находим количество повторений множителя
    stepen[n] = multipliers.filter( v => v==multipliers[a]).length;
    n++
  }
  for (let a = 0; a < multipliers.length; a++){   //Находим количество нулей для каждого множителя 
    let count = 0;
    let b = multipliers[a];
    for (;multipliers[a] < number; multipliers[a] = multipliers[a]*b){
      count = count + Math.floor(number/multipliers[a])
    }
    arrcount.push(count)
  }
  for (let a=0;a<arrcount.length;a++){
    arrcount[a]=Math.floor(arrcount[a]/stepen[a]);
  }
  return Math.min.apply(Math,arrcount)
}