function add(a,b,c){
    return a + b + c
}
add(4,5,6)

function currying(a){
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

var result = currying(5)(10)(5)

console.log(result)


