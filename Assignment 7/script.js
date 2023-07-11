//Answer 1

function isIsomorphic(s, t) {
    // Check if the strings have the same length.
    if (s.length !== t.length) {
      return false;
    }
  
    // Create a mapping from characters in s to characters in t.
    const mapping = {};
    for (let i = 0; i < s.length; i++) {
      if (mapping.hasOwnProperty(s[i])) {
        if (mapping[s[i]] !== t[i]) {
          return false;
        }
      } else {
        if (t.indexOf(mapping[s[i]]) !== -1) {
          return false;
        }
        mapping[s[i]] = t[i];
      }
    }
  
    // Check if all characters in t have been mapped.
    for (let i = 0; i < t.length; i++) {
      if (!mapping.hasOwnProperty(t[i])) {
        return false;
      }
    }
  
    // The strings are isomorphic.
    return true;
  }
  
  // Test the function.
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t)); // true



  //Answer 2

  function isStrobogrammatic(num) {
    // Check if the string is empty or has an odd length.
    if (num.length === 0 || num.length % 2 === 1) {
      return false;
    }
  
    // Create a map of strobogrammatic pairs.
    const strobogrammaticPairs = {
      "0": "0",
      "1": "1",
      "6": "9",
      "8": "8",
      "9": "6",
    };
  
    // Iterate over the string, checking if each pair of characters is strobogrammatic.
    for (let i = 0; i < num.length / 2; i++) {
      if (strobogrammaticPairs[num[i]] !== num[num.length - 1 - i]) {
        return false;
      }
    }
  
    // The string is strobogrammatic.
    return true;
  }
  
  // Test the function.
  const num = "69";
  console.log(isStrobogrammatic(num)); // true

  


  //Answer 3

  function sumStrings(num1, num2) {
    // Initialize the result string.
    const result = "";
  
    // Initialize the carry.
    let carry = 0;
  
    // Iterate over the strings from the back.
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--, j--) {
      // Get the current digits.
      const digit1 = i >= 0 ? num1[i] - "0" : 0;
      const digit2 = j >= 0 ? num2[j] - "0" : 0;
  
      // Calculate the sum of the digits and the carry.
      const sum = digit1 + digit2 + carry;
  
      // Update the carry.
      carry = sum / 10;
  
      // Append the digit to the result string.
      result = String(sum % 10) + result;
    }
  
    // If there is a carry, append it to the result string.
    if (carry > 0) {
      result = String(carry) + result;
    }
  
    // Return the result string.
    return result;
  }
  
  // Test the function.
  const num1 = "11";
  const num2 = "123";
  console.log(sumStrings(num1, num2)); // "134"

  


  //Answer 4

  function reverseWords(s) {
    // Split the string into words.
    const words = s.split(" ");
  
    // Reverse the order of characters in each word.
    const reversedWords = words.map((word) => {
      const reversedWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
      }
      return reversedWord;
    });
  
    // Join the reversed words back together.
    const reversedSentence = reversedWords.join(" ");
  
    // Return the reversed sentence.
    return reversedSentence;
  }
  
  // Test the function.
  const s = "Let's take LeetCode contest";
  console.log(reverseWords(s)); // "s'teL ekat edoCteeL tsetnoc"

  
  //Answer 5

  function reverseStr(s, k) {
    const arr = s.split(''); // Convert the string to an array for easier manipulation
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, arr.length - 1);
  
      // Reverse the first k characters
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    return arr.join(''); // Convert the array back to a string
  }
  
  // Example usage:
  const s = "abcdefg";
  const k = 2;
  const reversedStr = reverseStr(s, k);
  console.log(reversedStr);



  //Answer 6

  function isShifted(s, goal) {
    // Check if the strings have the same length.
    if (s.length !== goal.length) {
      return false;
    }
  
    // Initialize a queue to store the characters of s.
    const queue = [];
    for (const char of s) {
      queue.push(char);
    }
  
    // Iterate over the characters of goal.
    for (const char of goal) {
      // If the current character is not in the queue, then the strings are not shifted versions of each other.
      if (!queue.includes(char)) {
        return false;
      }
  
      // Remove the first character from the queue.
      queue.shift();
    }
  
    // The strings are shifted versions of each other.
    return true;
  }
  
  // Test the function.
  const s = "abcde";
  const goal = "cdeab";
  console.log(isShifted(s, goal)); // true

  


  //Answer 7

  function backspaceCompare(s, t) {
    // Initialize two pointers to the end of the strings.
    let i = s.length - 1;
    let j = t.length - 1;
  
    // Iterate until both pointers reach the beginning of the strings.
    while (i >= 0 || j >= 0) {
      // If the current character in s is not a backspace, then compare it to the current character in t.
      if (s[i] !== "#") {
        if (s[i] !== t[j]) {
          return false;
        }
      }
  
      // If the current character in s is a backspace, then move the pointer in s one step back.
      else if (s[i] === "#") {
        i--;
      }
  
      // If the current character in t is not a backspace, then move the pointer in t one step back.
      else if (t[j] === "#") {
        j--;
      }
  
      // Move both pointers one step forward.
      i--;
      j--;
    }
  
    // The strings are equal.
    return true;
  }
  
  // Test the function.
  const s = "ab#c";
  const t = "ad#c";
  console.log(backspaceCompare(s, t)); // true



  //Answer 8

  const checkStraightLine = (coordinates) => {
    // Check if the number of points is at least 2.
    if (coordinates.length < 2) {
      return false;
    }
  
    // Calculate the slope of the line.
    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  
    // Iterate through the remaining points and check if their slopes are the same.
    for (let i = 2; i < coordinates.length; i++) {
      if ((coordinates[i][1] - coordinates[0][1]) / (coordinates[i][0] - coordinates[0][0]) !== slope) {
        return false;
      }
    }
  
    // The points make a straight line.
    return true;
  };
  