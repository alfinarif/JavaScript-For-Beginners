// Search data from array

var arr = [4, 5, 11, 2, 44, 15, 55, 66, 7]

var find = 15

isFound = false
for(var i =0; i<arr.length; i++){
    if(arr[i] == find){
        console.log('Data Found at Index ' + i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log('Data Not Found')
}