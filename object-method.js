// method for object in javascript

var obj = {
    x: 10,
    y: 20,
    z: 30
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// var obj2 = obj
// obj2.x = 70
// obj2.y = 100

// console.log(obj)
// console.log(obj2)

// assign a new object from old object
var obj2 = Object.assign({}, obj)
obj2.x = 100
obj2.y = 55
console.log(obj)
console.log(obj2)


