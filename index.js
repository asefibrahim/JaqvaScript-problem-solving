// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reversString = (str) => {
    let newStr = ''
    for (let i = str.length - 1; i >= 0, i--;) {
        newStr += str.charAt(i)
    }
    return newStr
}


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumAllPositiveNum = (arr) => {
    let sum = 0
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum
}


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const findFrequentNum = (numbers) => {
    let freQuentNum = {}
    numbers.map(num => {
        freQuentNum[num] = freQuentNum[num] + 1 || 1
    })

    let values = Object.values(freQuentNum)
    let keys = Object.keys(freQuentNum)



    const max = Math.max(...values)
    const i = values.findIndex((x) => { return x === max })
    return keys[i]

}


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no such pair found, return an empty array.
    return [];
}

//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}


//   Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanNumeralsMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanNumeral[i];
        const currentValue = romanNumeralsMap.get(currentSymbol);

        const nextSymbol = romanNumeral[i + 1];
        const nextValue = romanNumeralsMap.get(nextSymbol);

        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Error: The array should have at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        return "Error: All elements in the array are the same.";
    }

    return secondSmallest;
}





