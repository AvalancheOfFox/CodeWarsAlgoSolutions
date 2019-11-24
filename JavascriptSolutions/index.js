//Solutions for CodeWars Kata's done in Javascript


// Kata: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// 5 kyu, Rot13 Cipher
function rot13(message) {
    strArr = message.split("")
    newArr = []
    strArr.map(letter => {
        if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 77) {
            newArr.push(String.fromCharCode(letter.charCodeAt() + 13))
        }
        else if (letter.charCodeAt() >= 66 && letter.charCodeAt() <= 90) {
            newArr.push(String.fromCharCode(letter.charCodeAt() - 13))
        }
        else if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 109) {
            newArr.push(String.fromCharCode(letter.charCodeAt() + 13))
        }
        else if (letter.charCodeAt() >= 110 && letter.charCodeAt() <= 122) {
            newArr.push(String.fromCharCode(letter.charCodeAt() - 13))
        }
        else {
            newArr.push(letter)
        }
    })
    return newArr.join().replace(/,/g, "")
}

// Kata: https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
// 5 kyu, RGB to Hex
function rgb(r, g, b) {
    return [r, g, b].map(n => {
        if (n >= 255) { return 'FF' }
        if (n <= 0) { return '00' }
        return n.toString(16).length === 1 ? '0' + n.toString(16) : n.toString(16)
    }).join("").toUpperCase()

}

// Kata: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// 6 kyu, unique in Order
function uniqueInOrder(iterable) {
    let ans = []
    let currentElement;
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== currentElement) {
            currentElement = iterable[i]
            ans.push(iterable[i])
        }
    }
    return ans
}

// Kata: https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
// 6 kyu, Kebabize
function kebabize(str) {
    return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()
}

// Kata: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
// 6 kyu, COunt Characters in a String
function count(string) {
    let obj = {}
    string.split("").map(char => obj[char] ? obj[char]++ : obj[char] = 1)
    return obj;
}

// Kata: https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
// 6 kyu, Take a Ten Minute Walk
function isValidWalk(walk) {
    let hash = {}
    walk.map(dir => {
        hash[dir] ? hash[dir]++ : hash[dir] = 1
    })
    if (walk.length !== 10) {
        return false
    }
    else if (hash['n'] === hash['s'] && hash['e'] === hash['w']) {
        return true
    }
    else {
        return false
    }
}

// Kata: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// 6 kyu, Counting Duplicates
function duplicateCount(text) {
    let hash = {}
    let ans = 0
    text.toLowerCase().split("").map(char => {
        hash[char] ? hash[char]++ : hash[char] = 1
    })
    Object.values(hash).map(val => {
        if (val > 1) {
            ans++
        }
    })
    return ans
}
// Kata: https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
// 6 kyu, Meeting
function meeting(s) {
    arr = s.toUpperCase().split(";").sort(name => name.substring(name.indexOf(":") + 1, name.length))
    lastNames = arr.map(name => '(' + name.substring(name.indexOf(':') + 1, name.length) + ", " + name.substring(0, name.indexOf(":")) + ')')
    return lastNames.sort().join("")
}

// Kata, https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// 6 kyu, Highest Rank Number in an Array
function highestRank(arr) {
    let count = {}
    arr.map(el => { count[el] ? count[el]++ : count[el] = 1 })
    let ans = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b)
    return parseInt(ans)
}

// Kata: https://www.codewars.com/kata/iq-test/train/javascript
// 6 kyu, IQ Test
function iqTest(numbers) {
    let splitNum = numbers.split(" ").map(num => Number(num))
    const even = splitNum.filter(n => n % 2 === 0)
    const odd = splitNum.filter(n => n % 2 != 0)
    return even.length < odd.length ? splitNum.indexOf(even[0]) + 1 : splitNum.indexOf(odd[0]) + 1
}

// Kata: https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
// 6 kyu, Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
    let ans = []
    for (let i = a; i <= b; i++) {
        let num = i.toString()
        let sum = 0
        let index = 0
        while (index < num.length) {
            sum += Math.pow(parseInt(num[index]), (index + 1))
            index++
        }
        if (sum === parseInt(num)) {
            ans.push(parseInt(num));
        }
    }
    return ans
}

// Kata: https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
// 6 kyu, Format a string of names like 'Bart, Lisa, & Maggie'
function list(names) {
    let nameArr = []
    if (names.length === 0) {
        return ''
    }
    else if (names.length === 1) {
        oneArr = Object.values(names)
        return oneArr[0].name
    }
    else {
        names.map(x => {
            nameArr.push(x.name)
        })
        last = nameArr.slice(-1)
        sliceArr = nameArr.slice(0, -1)
        return sliceArr.join(", ") + (' & ' + last[0])
    }
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


// Refactor:
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

    let newStr = ""
    words.replace(/\s+/gi, "").toLowerCase().split("").map(char => {
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
// Kata: Encrypt This!
// 6 kyu, https://www.codewars.com/kata/encrypt-this/train/javascript

var encryptThis = function (text) {
    // Implement me! :)
    let newStr = ""
    let textArr = text.split(" ")
    let encryptedArr = textArr.map(word => {
        if (word.length == 1) {
            return newStr += word.charCodeAt(0) + " "
        }
        if (word.length == 2) {
            newStr += word.charCodeAt(0) + word.slice(1) + " "
        }
        else {
            let secLet = word.slice(1, 2)
            let stationaryLetters = word.slice(2, word.length - 1)
            let lastLet = word.slice(word.length - 1, word.length)
            newStr += word.charCodeAt(0) + lastLet + stationaryLetters + secLet + " "
        }
    })
    return newStr.trim()
}


// Kata: Who Likes It?
// 6 kyu, https://www.codewars.com/kata/who-likes-it/train/javascript
function likes(names) {
    if (names.length == 0) {
        return "no one likes this"
    }
    else if (names.length == 1) {
        return names[0] += " likes this"
    }
    else if (names.length == 2) {
        return names[0] + " and " + names[1] + " like this"
    }
    else if (names.length == 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }
    else {
        let num = names.length - 2
        return names[0] + ", " + names[1] + " and " + num + " others like this"
    }
}

// Refactor:
function likes(names) {
    let num = names.length - 2
    switch (names.length) {
        case 0: return "no one likes this"
        case 1: return names[0] += " likes this"
        case 2: return names[0] + " and " + names[1] + " like this"
        case 3: return names[0] + ", " + names[1] + " and " + names[2] + " like this"
    }
    if (names.length >= 4) {
        return names[0] + ", " + names[1] + " and " + num + " others like this"
    }
}


// Kata: Extract the Last Names of People Named Michael
// 6 kyu, https://www.codewars.com/kata/extract-last-names-of-people-named-michael/train/javascript
function getMichaelLastName(inputText) {
    let regex = /Michael\s[A-Z][a-z]+/g
    let fullNameArr = inputText.match(regex)
    return lastNames = fullNameArr.map(name => name.replace('Michael ', ""))
}

// i need to loop thru the string and store all occurence of 'Michael XXXX'
// anytime we see the characters "Michael ", we need to return whatever the next alphanumeric to non alphanumeric span is 
// once stored, delete all the "Micahel " precedings and return
// Kata: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// 6 kyu, Find the Odd Int

const findOdd = (arr) => arr.reduce((a,b) => a^b)

// Kata: https://www.codewars.com/kata/sum-of-two-integers/train/javascript
//6 kyu, Sum of Two Integers (Bitwise Math)
const add = (x, y) => y ? add(x ^ y, (x & y) << 1) : x;


// 6 kyu, Your Order, Please
// Kata: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

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

// Kata: Draw Stairs
// 8 kyu, https://www.codewars.com/kata/draw-stairs/train/javascript
function drawStairs(n) {
    let str = 'I'
    for (let i = 1; i < n; i++) {
        str += '\n' + ' '.repeat(i) + 'I'
    }
    return str
}