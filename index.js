//  Eliminate duplicates in an Array.
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will remove all
// duplicates and return an array with unique items

let arr = [3,4,9,3,8,0,4,9]

const uniqueItems = (arr)=>{
    return [...new Set(arr)]
}

console.log(uniqueItems(arr)) 

 //  Find the largest and smallest number in an unsorted integer array
// a) Suppose you have an Array [3,4,9,3,8,0,4,9].
// b) Write a function which will receive an array as param , that will return the highest and
// smallest number as an array.

let arr2 = [3,4,9,3,8,0,4,9]

const findMinMax = (arr)=>{
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(findMinMax(arr2))


//  A given string be reversed using recursion
// a) Suppose you have a string “KRIYATMA”
// b) Write a function that will receive a string as param, that will reverse the string and
// return it.

let str = "KRIYATMA"

const reverseString = (str)=>{
    if(str === "") return str
    else return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString(str))

// 4) Write a function that finds the longest word in a sentence.
// a) Suppose you have a string ‘The quick brown fox jumps over the lazy
// dog’.
// b) Write a function that will return the longest word .

const srt1 = 'The quick brown fox jumps over the lazy dog'

const longestWord = (str1) => {
    const words = str1.split(" ")
    let longest = ''
    for(let word of words){
        if (word.length > longest.length){
            longest= word
        }
    }
    return longest
}

console.log(longestWord(srt1))


//  Suggest any improvements in an application that you are using daily

