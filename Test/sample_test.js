const assert = require('chai').assert;

describe('sample tests', function(){

    function sum(a,b){
        return a + b
    }

    it('adds a and b and return their correct sum', function(){
        assert.equal(sum(1,2), 3);
    });

    it('should return a number', function(){
        assert.typeOf(sum(1,2), 'number');
    });
})