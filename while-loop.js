// while loop in javascript

// var i = 0
// while(i<10){
//     console.log('CleveRange')
//     i++
// }

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9){
        console.log('Everything is ok')
        isRunning = false
    }else{
        console.log('You have got ' + rand)
    }
}