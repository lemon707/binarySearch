var binarySearchFunction = require('../binarySearch.js');

describe("A suite", function() {

  var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

  it("returns -1 if the array does not contain target value", function() {
    expect(binarySearchFunction([1,2], 4)).toEqual(-1);
  });

  it("returns index of the location in an array of three items", function() {
    expect(binarySearchFunction([1,2,3], 3)).toEqual(2);
  });

  it("returns index of the location in an array of four items", function() {
    expect(binarySearchFunction([1,2,3,4], 3)).toEqual(2);
  });

  it("returns index of the location in an array of five items", function() {
    expect(binarySearchFunction([1,2,3,4,5], 4)).toEqual(3);
  });

  it("returns index of the location in a large array", function() {
    expect(binarySearchFunction(primes, 73)).toEqual(20);
  });

  it("returns -1 if a large array does not contain target value", function() {
    expect(binarySearchFunction(primes, 4)).toEqual(-1);
  });
  
});
