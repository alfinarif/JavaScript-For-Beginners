
function addAll(){
    var sum = 0
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum
}

var a = addAll(10,20,30)
var b = addAll(50,50)

console.log(a, b)



function person(name,email){
    return{
        name: name,
        email: email
    }

    // console.log('it will never show for return already exist')
}

var p1 = person('Ar Alfin Arif','cleavercode@gmail.com')
console.log(p1)



