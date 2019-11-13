//Solutions for CodeWars Kata's done in Javascript


// Kata: https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
// 5 kyu, RGB to Hex
function rgb(r, g, b) {
    return [r, g, b].map(n => {
        if (n >= 255) { return 'FF' }
        if (n <= 0) { return '00' }
        return n.toString(16).length === 1 ? '0' + n.toString(16) : n.toString(16)
    }).join("").toUpperCase()

}

// Kata: https://www.codewars.com/kata/586538146b56991861000293/train/javascript
// 6 kyu, If You Can Read This...
function to_nato(words) {
    const alphabet = {
        'a': 'Alfa',
        'b': 'Bravo',
        'c': 'Charlie',
        'd': 'Delta',
        'e': 'Echo',
        'f': 'Foxtrot',
        'g': 'Golf',
        'h': 'Hotel',
        'i': 'India',
        'j': 'Juliett',
        'k': 'Kilo',
        'l': 'Lima',
        'm': 'Mike',
        'n': 'November',
        'o': 'Oscar',
        'p': 'Papa',
        'q': 'Quebec',
        'r': 'Romeo',
        's': 'Sierra',
        't': 'Tango',
        'u': 'Uniform',
        'v': 'Victor',
        'w': 'Whiskey',
        'x': 'Xray',
        'y': 'Yankee',
        'z': 'Zulu',
    }

    let strArr = words.replace(/\s+/gi, "").toLowerCase().split("")
    let newStr = ""
    strArr.map(char => {
        if (alphabet[char]) {
            newStr += " " + alphabet[char]
        }
        else {
            newStr += " " + char
        }
    }
    )
    return newStr.trim()
}
// Kata: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// 6 kyu, Find the Odd Int

const findOdd = (arr) => arr.reduce((a,b) => a^b)

// Kata: https://www.codewars.com/kata/sum-of-two-integers/train/javascript
//6 kyu, Sum of Two Integers (Bitwise Math)
const add = (x, y) => y ? add(x ^ y, (x & y) << 1) : x;


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

// Kata: https://www.codewars.com/kata/find-screen-size/train/javascript
// 7kyu, Find Screen Size
function findScreenHeight(width, ratio) {
    let rez = ratio.split(':')
    console.log(rez, "rez")
    console.log(width, "width")
    console.log(width / rez[0] * rez[1])
    return `${width}x${ width/rez[0]*rez[1]}`
}

// Kata: https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript
// 7 kyu, Friend or Foe?

function friend(friends) {
    let arr = []
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            arr.push(friends[i])
        }
    }
    return arr
}
// refactor

function friend(friends) {
   return friends.filter(friend => friend.length == 4)
}

// Kata: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript
// 7 kyu, List Filtering

function filter_list(l) {
    return l.filter(element => typeof (element) === 'number') // Return a new array with the strings filtered out
}

// Kata: https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
// 7 kyu, Most Digits

function findLongest(array) {
    let y = array.toString().split(",").sort(function (a, b) {
        return b.length - a.length
    })[0]
    return parseInt(y)
}

// Kata: https://www.codewars.com/kata/alphabetical-addition/train/javascript
// 7 kyu, Alphabetical Addition

let addLetters = (...letters) => String.fromCharCode((letters.reduce((sum, l) => sum + l.charCodeAt() - 96, 0) % 26 || 26) + 96)


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

// Kata: https://www.codewars.com/kata/odder-than-the-rest/train/javascript
// 7 kyu, Odder Than The Rest

function oddOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return i
        }
    }
    return -1
}

// realized immediately this could be refactored, didn't know "indexOf" existed!
// refactor! 

function oddOne(arr){
    return arr.findIndex(x => x%2 != 0)
}

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

// Kata: https://www.codewars.com/kata/third-angle-of-a-triangle/javascript
// 8 kyu, Grasshopper - Terminal Game Move Function
function move(position, roll) {
    return position + (roll * 2)
}

// Kata: https://www.codewars.com/kata/keep-hydrated-1/train/javascript
// 8 kyu, Keep Hydrated! 
function litres(time) {
    return Math.floor(time * 0.5)
}

// Kata: https://www.codewars.com/kata/reversed-strings/train/javascript
// 8 kyu, Reverse String
function solution(str) {
    return str.split("").reverse().join("")
}

// Kata: https://www.codewars.com/kata/area-of-a-square/train/javascript
// 8 kyu, Area of a Square

function squareArea(A) {
    return Number(Math.pow(2 * A / 3.1416, 2).toFixed(2))
}

// Kata: https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// 8 kyu, String to Array

function stringToArray(string) {
    return x = string.split(" ")
}

// Kata: https://www.codewars.com/kata/duck-duck-goose/train/javascript
// 8 kyu, Duck Duck Goose

const duckDuckGoose = (players, goose) => {
    return players[(goose - 1) % players.length].name
}