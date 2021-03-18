

var arr = [1, 20, 3, 41, 15, 6]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[4]
// arr[5]

// for (var i = 0; i<arr.length; i++){
//     // console.log(arr[i])
//     arr[i] = arr[i] * 2
// }
// console.log(arr)

// var sum = 0
// for (var i = 0; i<arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum)

var sum = 0
for(var i=0;i<arr.length;i++){
    if(arr[i] % 2 == 1){
        sum += arr[i]
    }
}
console.log(sum)