var assert = require('chai').assert;
var calculator = require('../middleware/calculator')

describe('Calculator Test' , function(){
  it('Addition should return: ' + (1+3+4+5), function(){
    //add test
    assert.equal(calculator.add(1,3,4,5),(1+3+4+5))
  })
})

describe('Calculator Test' , function(){
  it('substract should return: ' + (7-4), function(){
    //substract test
    assert.equal(calculator.subtract(7,4),(7-4))
  })
})

describe('Calculator Test' , function(){
  it('divide should return: ' + (8/2), function(){
    //divide test
    assert.equal(calculator.divide(8,2),(8/2))
  })
})

describe('Calculator Test' , function(){
  it('divide should return: ' + (8*4), function(){
    //multiply test
    assert.equal(calculator.multiply(8,4),(8*4))
  })
})
