//a function can be stored in a variable
function add(a, b){
    return a+b
}

var sum = add
console.log(sum(4,5))

// a function  can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

// a function can be stored in an object
var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(5,5))


// we can create function as we need
setTimeout(function() {
    console.log('i have created')
}, 100)


// we can pass function as an arguments

// we can return functions from another function