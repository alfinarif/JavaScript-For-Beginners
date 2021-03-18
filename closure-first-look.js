// First Look ar Closure

var b = 10

function a(){
    // console.log(b)
    var x = 5

    return function() {
        console.log(x)
    }
}

var abc = a()
console.log(abc)