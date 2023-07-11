// answer 1

function isPowerOfThree(n) {
    "use strict";
  
    if (n < 1) {
      return false;
    }
  
    while (n % 3 === 0) {
      n = n / 3;
    }
  
    return n === 1;
  }
  
  if (require.main === module) {
    console.log(isPowerOfThree(27)); // true
    console.log(isPowerOfThree(0)); // false
    console.log(isPowerOfThree(1)); // false
  }
  

  //answer 2

  function lastRemaining(n) {
    let leftToRight = true; // Flag to track the direction
    let remaining = n; // Count of remaining numbers
    let step = 1; // Step size
    let head = 1; // Current head value
  
    while (remaining > 1) {
      if (leftToRight || remaining % 2 === 1) {
        // If moving from left to right or remaining numbers is odd
        head += step;
      }
  
      // Update the remaining count and step size
      remaining = Math.floor(remaining / 2);
      step *= 2;
      leftToRight = !leftToRight;
    }
  
    return head;
  }
  
  // Example usage:
  const n = 9;
  const lastNumber = lastRemaining(n);
  console.log(lastNumber);

  //answer 3

  function printSubsets(setStr) {
    "use strict";
  
    if (setStr.length === 0) {
      console.log("");
      return;
    }
  
    firstChar = setStr[0];
    remainingStr = setStr.slice(1);
  
    // Print the subset that does not contain the first character.
    printSubsets(remainingStr);
  
    // Print the subset that contains the first character.
    console.log(firstChar);
    printSubsets(remainingStr);
  }
  
  if (require.main === module) {
    setStr = "abc";
    printSubsets(setStr);
  }



  //answer 4

  function lengthOfString(str) {
    "use strict";
  
    if (str === "") {
      return 0;
    } else {
      return 1 + lengthOfString(str.substring(1));
    }
  }
  
  if (require.main === module) {
    str = "hello";
    console.log(lengthOfString(str)); // 5
  }



  //answer 5
  function countSubstrings(s) {
    "use strict";
  
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      let start = i;
      let end = i;
      while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
      }
      if (start >= 0 && end < s.length) {
        count++;
      }
    }
    return count;
  }
  
  if (require.main === module) {
    s = "abcab";
    console.log(countSubstrings(s)); // 7
  
    s = "aba";
    console.log(countSubstrings(s)); // 4
  }



  //answer 6
  function towerOfHanoi(n, from, to, aux) {
    "use strict";
  
    if (n === 0) {
      return;
    }
  
    towerOfHanoi(n - 1, from, aux, to);
    console.log(`Move disk ${n} from ${from} to ${to}`);
    towerOfHanoi(n - 1, aux, to, from);
  }
  
  if (require.main === module) {
    n = 3;
    from = "A";
    to = "C";
    aux = "B";
    console.log(`The steps to solve Tower of Hanoi with ${n} disks are:`);
    towerOfHanoi(n, from, to, aux);
  }

  //answer 7

  function permutations(str) {
    "use strict";
  
    if (str.length === 0) {
      return [""];
    }
  
    let permutations = [];
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      const remainingStr = str.slice(0, i) + str.slice(i + 1);
      const permutationsOfRemainingStr = permutations(remainingStr);
      for (const permutation of permutationsOfRemainingStr) {
        permutations.push(currentChar + permutation);
      }
    }
    return permutations;
  }
  
  if (require.main === module) {
    str = "abb";
    console.log(permutations(str));
  }



  //answer 8
  function countConsonants(str) {
  
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }
  
  if (require.main === module) {
    str = "geeksforgeeks portal";
    console.log(countConsonants(str)); // 12
  }
  