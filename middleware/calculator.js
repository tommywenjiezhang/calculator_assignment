
module.exports.add = (...args) => {
  return args.reduce((acc,next) => acc + next, 0);
}

module.exports.multiply = (...args) => {
return args.reduce((acc,next) => acc*next,1)
}

module.exports.subtract =  (...args) => {
  let numbers = [...args];
  let firstNumber = numbers[0];
  for(var i=1; i<numbers.length; i++){
    firstNumber -= numbers[i]
  }
  return firstNumber;
}

module.exports.divide = (...args) => {
  let numbers = [...args];
  let firstNumber = numbers[0];
  for(var i=1; i<numbers.length; i++){
    firstNumber /= numbers[i]
  }
  return firstNumber;
}
