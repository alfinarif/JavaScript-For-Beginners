// infinity loop

// var isRunning = true

// while(isRunning){
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand == 9){
//         console.log('Everything is ok')
//         isRunning = false
//     }else{
//         console.log('You have got ' + rand)
//     }
// }

for(; ;){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9){
        console.log('Infinity loop')
        break
    }else{
        console.log('You have got ' + rand)
    }
}