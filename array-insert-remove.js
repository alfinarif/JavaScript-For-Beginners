
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//insert data in array
// arr[3]= 90
// arr.push(90) // last index a append hobe
// arr.unshift(90) // first index a insert hobe

// arr.splice(1, 0, 90, 100) // first index second delete count last data for insert

// arr[0]= undefined
// arr.pop() // last index will be delete
// arr.shift() // first index will be delete
arr.splice(1, 2)
console.log(arr)