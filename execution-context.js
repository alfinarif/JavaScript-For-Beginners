function a(){
    b()
    console.log('I am function A')
}

function b(){
    d()
    console.log('I am function B')
}

function c(){
    console.log('I am function C')
}

function d(){
    c()
    console.log('I am function D')
}

var x = 100
a()
console.log('I am Global')

// execution or C function context
// execution of D funtion context
// execution of B function context
// execution of A function context
// execution of global context





