var obj1 = {
    x:19,
    y:30
}

var obj2 = {
    x:19,
    y:30
}

// console.log(obj1 === obj2)

if (obj1.x == obj2.x && obj1.y == obj2.y){
    console.log(true)
}else{
    console.log(false)
}

console.log(obj1)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))










