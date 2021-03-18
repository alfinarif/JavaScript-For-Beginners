var arr = [1,2,3,4,5,6,7,8,9,22,11,71,43,67,77]

// var findData = arr.find(function(value,index){
//     return value == 22
// })

// console.log(findData)

// var findIndexData = arr.findIndex(function(value){
//     return value == 43
// })

// console.log(findIndexData)


// function implement

function myFind(arr,cb){
    for (var i=0;i<arr.length;i++){
        if (cb(arr[i])){
            // return arr[i]
            return i
        }
    }
}

var result = myFind(arr, function(value){
    return value == 11
})
console.log(result)









