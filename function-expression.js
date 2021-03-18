
var addition = function(a,b){
    return a+b
}

// console.log(addition(10,20))

setTimeout(function() {
    console.log('I will call after 5 seconds')
}, 5000)

var another = addition
console.log(another(2,4))


