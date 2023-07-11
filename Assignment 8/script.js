// Answer 1

function lowestAsciiSum(s1, s2) {
    // Initialize a variable to store the ASCII sum.
    let asciiSum = 0;
  
    // Iterate through the two strings, comparing the characters at each index.
    for (let i = 0, j = 0; i < s1.length && j < s2.length; i++, j++) {
      if (s1[i] !== s2[j]) {
        asciiSum += s1.charCodeAt(i);
      } else {
        // If the characters are equal, simply increment both indices.
        i++;
        j++;
      }
    }
  
    // Continue adding the ASCII values of the remaining characters from the other string to `asciiSum`.
    while (i < s1.length) {
      asciiSum += s1.charCodeAt(i);
      i++;
    }
    while (j < s2.length) {
      asciiSum += s2.charCodeAt(j);
      j++;
    }
  
    // Return the ASCII sum.
    return asciiSum;
  }
  
  // Driver code.
  const s1 = "sea";
  const s2 = "eat";
  console.log(lowestAsciiSum(s1, s2));



  //Answer 2

  function isValid(s) {
    let openCount = 0; // Count of open parentheses
    let starCount = 0; // Count of wildcard characters '*'
  
    // First pass: Check for matching open and close parentheses
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        openCount++;
      } else if (s[i] === '*') {
        starCount++;
      } else if (s[i] === ')') {
        if (openCount > 0) {
          openCount--;
        } else if (starCount > 0) {
          starCount--;
        } else {
          return false; // Unmatched closing parenthesis
        }
      }
    }
  
    // Second pass: Check for remaining open parentheses
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === '(') {
        if (openCount > 0) {
          openCount--;
        } else if (starCount > 0) {
          starCount--;
        } else {
          return false; // Unmatched opening parenthesis
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  const s = "()";
  const isValidString = isValid(s);
  console.log(isValidString);



  //Answer 3

  function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Initialize a 2D array to store the minimum number of steps
    const dp = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the first row and first column of dp
    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Perform dynamic programming to fill the rest of dp
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          // Characters are the same, no deletion needed
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          // Characters are different, choose the minimum deletion count from the adjacent cells
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  
    // Return the minimum number of steps to make word1 and word2 the same
    return dp[m][n];
  }
  
  // Example usage:
  const word1 = "sea";
  const word2 = "eat";
  const minSteps = minDistance(word1, word2);
  console.log(minSteps);



  //Answer 4

  function constructBinaryTreeFromString(s) {
    // Initialize a stack to store the nodes of the binary tree.
    const stack = [];
  
    // Iterate through the string, parsing the characters and constructing the nodes of the binary tree.
    for (const char of s) {
      if (char === "(") {
        stack.push(null);
      } else if (char === ")") {
        const right = stack.pop();
        const left = stack.pop();
        const node = new TreeNode(parseInt(char));
        node.left = left;
        node.right = right;
        stack.push(node);
      } else {
        stack.push(parseInt(char));
      }
    }
  
    // Return the root node of the binary tree.
    return stack.pop();
  }
  
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // Driver code.
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTreeFromString(s);
  console.log(root.val);
  console.log(root.left.val);
  console.log(root.right.val);
  console.log(root.left.left.val);
  console.log(root.left.right.val);
  console.log(root.right.right.val);



  //Answer 5

  function compress(chars) {
    let writeIdx = 0; // Index to write the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (let i = 1; i <= chars.length; i++) {
      if (i < chars.length && chars[i] === chars[i - 1]) {
        // If the current character is the same as the previous one, increment the count
        count++;
      } else {
        // Write the current character
        chars[writeIdx] = chars[i - 1];
        writeIdx++;
  
        // Write the count if it is greater than 1
        if (count > 1) {
          const countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[writeIdx] = countStr[j];
            writeIdx++;
          }
        }
  
        // Reset the count for the next group of consecutive repeating characters
        count = 1;
      }
    }
  
    return writeIdx;
  }
  
  // Example usage:
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  console.log(newLength);
console.log(chars.slice(0, newLength));

  



  //Answer 6
  function findAnagrams(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0); // Count of characters in p
    const sCount = new Array(26).fill(0); // Count of characters in the sliding window of s
  
    // Count the characters in p
    for (let i = 0; i < p.length; i++) {
      pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
  
    // Initialize the sliding window
    let left = 0;
    let right = 0;
  
    // Process the sliding window through s
    while (right < s.length) {
      // Expand the window by including the character at the right pointer
      sCount[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;
  
      // Shrink the window if its size exceeds the length of p
      if (right - left + 1 > p.length) {
        sCount[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
        left++;
      }
  
      // Check if the window is an anagram of p
      if (right - left + 1 === p.length && isAnagram(sCount, pCount)) {
        result.push(left);
      }
  
      right++;
    }
  
    return result;
  }
  
  // Helper function to check if two character count arrays are the same
  function isAnagram(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Example usage:
  const s = "cbaebabacd";
  const p = "abc";
  const startIndices = findAnagrams(s, p);
  console.log(startIndices);



  //Amswer 7

  function decodeString(s) {
    const stack = []; // Stack to store the count and decoded strings
    let currentCount = 0; // Current count of repeating characters
    let currentString = ''; // Current decoded string
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (isDigit(char)) {
        // If the character is a digit, update the current count
        currentCount = currentCount * 10 + parseInt(char);
      } else if (char === '[') {
        // Push the current count and string to the stack
        stack.push(currentCount);
        stack.push(currentString);
        // Reset the current count and string for the new repeating block
        currentCount = 0;
        currentString = '';
      } else if (char === ']') {
        // Decode the repeating block by repeating the current string
        const prevString = stack.pop(); // Previous decoded string
        const prevCount = stack.pop(); // Count of repeating characters
        currentString = prevString + currentString.repeat(prevCount);
      } else {
        // If the character is a letter, add it to the current string
        currentString += char;
      }
    }
  
    return currentString;
  }
  
  // Helper function to check if a character is a digit
  function isDigit(char) {
    return char >= '0' && char <= '9';
  }
  
  // Example usage:
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString);



  //Answer 8

  function canSwapTwoLetters(s, goal) {
    // Initialize a map to store the characters in s.
    const charMap = new Map();
    for (const char of s) {
      charMap.set(char, char);
    }
  
    // Iterate through the characters in goal, checking if they are in s.
    for (const char of goal) {
      if (!charMap.has(char)) {
        return false;
      }
  
      // If the character is in s, remove it from the map.
      charMap.delete(char);
    }
  
    // If the map is empty, then all the characters in goal are in s and we can swap two letters to make them equal.
    return charMap.size === 0;
  }
  
  // Driver code.
  const s = "ab";
  const goal = "ba";
  console.log(canSwapTwoLetters(s, goal));
  
  
  
  