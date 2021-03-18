// Break Statment in javascript

while(true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9){
        console.log('Everything is ok')
        break
    }else{
        console.log('You have got ' + rand)
    }
}

for(var i=1;i<10;i++){
    if(i%5 == 0){
        break
    }else{
        console.log('break statment working')
    }
}