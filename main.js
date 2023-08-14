function closingInSum(n) {

  let digitSum = 0
  let arr = n.toString().split('')

  // console.log(arr)
  // console.log(arr.length)

  while (arr.length) {
    digitSum += parseInt(`${arr.shift()}${arr.pop()}`)
  }

  return digitSum

}

// console.log(closingInSum(12345777))
console.log(closingInSum(121))


// params: n    // number
// return: number    // sum of digits formed by concatenating the first and last digits all the way to the middle
// e.g. closingInSum(12345777)
// results in 126    // 17 + 27 + 37 + 45

// declare a variable digitSum and assign it to 0
// declare a variable arr and assign it to n.toString().split('')
// initialize a for loop with a condition of less than or equal to arr.length / 2 + 1
// digitSum += ( arr[i].toString + arr[ -(1 + i) ].toString )     // if that doesnt work do arr[i].toString + arr[ arr.length - (i + 1) ].toString
// return digitSum

