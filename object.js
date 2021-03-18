// object literal vs constructor

// var obj = {}
// obj.x = 10
// console.log(obj)

var point = {
    x: 10,
    y: 20
}

point.y = 30
point.z = 50
console.log(point)
// console.log(typeof point)


// constructor object
var obj2 = Object()
obj2.a = 10
console.log(obj2)

var obj3 = new Object()
obj3.b = 90
console.log(obj3)