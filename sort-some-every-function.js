var person = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 21
    },
    {
        name: 'C',
        age: 25
    },
    {
        name: 'D',
        age: 22
    }
]

var arr = [1,4,6,2,5,8,9,11,33,7,22,55,88,9,89,1]
// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person)
arr.sort(function(a,b){
    if (a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log(arr)

person.sort(function(a,b){
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(person)


var res1 = arr.every(function(value){
    return value % 2 ==0
})
console.log(res1)

var res2 = arr.every(function(value){
    return value >=0
})
console.log(res2)


// some function
var res3 = arr.some(function(value){
    return value % 2 == 1
})
console.log(res3)

var res4 = arr.some(function(value){
    return value < 0
})

console.log(res4)







