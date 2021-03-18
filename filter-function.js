var arr = [1,2,3,4,5]

// var filteredArr = arr.filter(function(value){
//     return value % 2 == 0
// })

// console.log(filteredArr)


function myFilter(arr,cb){
    var newArr = []
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr, function(value){
    return value % 2 == 0
}))

var a = myFilter(arr, function(value){
    return value % 2 ==1
})
console.log(a)





var b = arr.filter(function(value,index,arr){
    return value % 2 == 0
})

console.log(b)

function MyFilterFunc(arr,cbfunc){
    var arrpush = []
    for(var i=0;i<arr.length;i++){
        if(cbfunc(arr[i],i,arr)){
            arrpush.push(arr[i])
        }
    }
    return arrpush
}

console.log(MyFilterFunc(arr, function(value){
    return value %2 == 0
}))

console.log(MyFilterFunc(arr, function(value){
    return value %2 == 1
}))








