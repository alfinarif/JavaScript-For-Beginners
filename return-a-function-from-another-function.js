// function greet(msg){
//     function sayHi(name){
//         return msg + ', ' + name + ' !'
//     }
//     return sayHi
// }

// var gm = greet('Good Morning')
// // console.log(typeof gm)

// var msg = gm('Alfin')
// console.log(msg)


function base(b){
    return function (n){
        var result = 1
        for (var i =0; i<b;i++){
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))












