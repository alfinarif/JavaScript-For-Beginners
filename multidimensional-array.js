var arr = [
    [72, 33, 44, 55],
    [80, 90, 74, 33],
    [40, 20, 84, 53],
]

//console.log(arr)
// console.log(arr[0])
// console.log(arr[1][1])

for(var i=0; i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log('Elements ' + i + ' = ' + arr[i][j])
    }
}