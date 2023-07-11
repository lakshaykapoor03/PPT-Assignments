// Answer 1

function isPowerOfTwo(n) {
    // If n is 0, then it is not a power of two.
    if (n === 0) {
      return false;
    }
  
    // While n is divisible by 2, divide it by 2.
    while (n % 2 === 0) {
      n = n / 2;
    }
  
    // If n is 1, then it is a power of two.
    return n === 1;
  }
  
  // Driver code.
  const n = 16;
  console.log(isPowerOfTwo(n));



  //Answer 2

  function sumOfNaturalNumbers(n) {
    // Initialize the sum to 0.
    let sum = 0;
  
    // Iterate through the numbers from 1 to n, adding them to the sum.
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Return the sum.
    return sum;
  }
  
  // Driver code.
  const n = 5;
  console.log(sumOfNaturalNumbers(n));



  //Answer 3

  function factorial(n) {
    // Initialize the factorial to 1.
    let factorial = 1;
  
    // Iterate through the numbers from 2 to n, multiplying them by the factorial.
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
  
    // Return the factorial.
    return factorial;
  }
  
  // Driver code.
  const n = 5;
  console.log(factorial(n));



  //Answer 4

  function power(n, p) {
    // Initialize the result to 1.
    let result = 1;
  
    // Iterate through the numbers from 1 to p, multiplying the result by N.
    for (let i = 1; i <= p; i++) {
      result *= n;
    }
  
    // Return the result.
    return result;
  }
  
  // Driver code.
  const n = 5;
  const p = 2;
  console.log(power(n, p));



  //Answer 5

  function findMax(arr, startIndex) {
    // Base case.
    if (startIndex === arr.length - 1) {
      return arr[startIndex];
    }
  
    // Recursive case.
    const maxRecursive = findMax(arr, startIndex + 1);
    return Math.max(arr[startIndex], maxRecursive);
  }
  
  // Driver code.
  const arr = [1, 4, 3, -5, -4, 8, 6];
  const startIndex = 0;
  console.log(findMax(arr, startIndex));



  //Answer 6

  function nthTerm(a, d, N) {
    // Initialize the nth term to the first term.
    let nthTerm = a;
  
    // Iterate N-1 times, adding the common difference to the nth term.
    for (let i = 1; i < N; i++) {
      nthTerm += d;
    }
  
    // Return the nth term.
    return nthTerm;
  }
  
  // Driver code.
  const a = 2;
  const d = 1;
  const N = 5;
  console.log(nthTerm(a, d, N));



  //Answer 7

  function permutations(str) {
    // If the string is empty, then return.
    if (str.length === 0) {
      return [];
    }
  
    // Initialize the permutations array.
    const permutations = [];
  
    // Iterate through the characters in the string.
    for (let i = 0; i < str.length; i++) {
      // Get the current character.
      const currentCharacter = str[i];
  
      // Get the permutations of the remaining characters.
      const remainingPermutations = permutations(str.slice(0, i) + str.slice(i + 1));
  
      // For each permutation of the remaining characters, add the current character to the beginning.
      for (const permutation of remainingPermutations) {
        permutations.push(currentCharacter + permutation);
      }
    }
  
    // Return the permutations.
    return permutations;
  }
  
  // Driver code.
  const str = "ABC";
  console.log(permutations(str));

  


  //Answer 8
  function productOfArray(arr) {
    "use strict";
  
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
  if (require.main === module) {
    let arr1 = [1, 2, 3, 4, 5];
    console.log(productOfArray(arr1)); // 120
  
    let arr2 = [1, 6, 3];
    console.log(productOfArray(arr2)); // 18
  }
  
  
  
  
  
  
  