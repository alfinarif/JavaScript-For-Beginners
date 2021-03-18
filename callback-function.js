// CallBack Function in javascript

function sample(a,b,cb){
    var c = a + b
    var d = a - b
    var result = cb(c,d)
    return result
}



function sum(a,b) {
    return a + b
}

// console.log(sample(4,6))
var result = sample(40,4, sum)
console.log(result)


var result2 = sample(3,5, function(c,d){
    return c - d
})

console.log(result2)

var result3 = sample(4,10, function(c,d){
    return c + d
})

console.log(result3)

