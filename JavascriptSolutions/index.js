//Solutions for CodeWars Kata's done in Javascript

// Kata: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
// 6 kyu, Your Order, Please

function order(words) {
    let obj = {}
    words = words.split(" ")
    words.forEach((word) => {
        chars = word.split("")
        chars.forEach((char) => {
            console.log(parseInt(char))
            if (!!parseInt(char)) {
                obj[char] = word
                console.log(obj)
            }
        })
    })
    return Object.values(obj).join(" ")
}

// Kata: https://www.codewars.com/kata/523f5d21c841566fde000009
// 6 kyu, Array.diff 
function array_diff(a, b) {
    Array.prototype.diff = function (a) {
        return this.filter(function (i) { return a.indexOf(i) < 0; });
    };
    return a.diff(b)
}

// Kata: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// 7 kyu, London CityHacker
function londonCityHacker(journey) {
    let total = 0;
    for (let i = 0; i < journey.length; i++) {
        if (isNaN(journey[i]))
            total += 2.40;
        else {
            total += 1.50;
            if (typeof journey[i + 1] == "number")
                i++;
        }
    }
    return `£${total.toFixed(2)}`;
} 

// Kata: https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// 7 kyu, Vowel Count

function getCount(str) {
    var vowelsCount = 0;
    vowels = ['a', 'e', 'i', 'o', 'u']
    str.split("").forEach((letter) => {
        if (vowels.includes(letter)) {
            vowelsCount++
        }
    })
    return vowelsCount;
}


// Kata: https://www.codewars.com/kata/sum-of-odd-numbers/train/javascript
// 7 kyu, Sum of Odd Numbers

function rowSumOddNumbers(n) { return n ** 3 }

// Kata: https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// 8 kyu, Grasshopper - Summation
var summation = function (num) {
    var total = 0
    for (let i = 0; i <= num; i++) {
        total += i
    }
    return total
}

// Kata: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
// 8 kyu, Student's Final Grade

// initial
function finalGrade(exam, projects) {
    var grade = 0;
    if (exam > 90 || projects > 10) {
        grade = 100;
    }
    else if (exam > 75 && projects >= 5) {
        grade = 90;
    }
    else if (exam > 50 && projects >= 2) {
        grade = 75;
    }
    else {
        grade = 0;
    }

    return grade// final grade
}

// Kata: https://www.codewars.com/kata/third-angle-of-a-triangle/javascript
// 8 kyu, Third Angle of a Triangle

function otherAngle(a, b) {
    return 180 - (a + b);
}

