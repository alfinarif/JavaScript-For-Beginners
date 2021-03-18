// function add(a,b) {
//     // var a = a
//     // var b = b
//     // console.log(a+b)
//     var result = a+b
//     console.log(result)
// }

// add(10,20)
// add(7,3)

// var arr1 = [1,2,3]
// var arr2 = [1,5,7]
// var arr3 = [5,20,3]

// function sumArray(arr){
//     var sum = 0
//     for(var i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// sumArray(arr1)
// sumArray(arr2)
// sumArray(arr3)




function test(a,b,c){
    // console.log(JSON.stringify(arguments))
    // console.log(typeof a)
    // console.log(arguments)

    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }

}

// test(10,20,40)
// test()
test(10,20,30)

function addAll(){
    var sum = 0
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(10,33,55)
addAll(5,3,2)




