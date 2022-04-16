let myArr = [];
// Only change code below this line

function* multiplication(x){

    for(let i = 1; i < x; i++){
         
        
          x *= 2 

    
        yield x;
       
        myArr.push(x);
    }

    
}

var num = multiplication(3);

for(let i = 0; i <4 ; i++){

    let iter = num.next();
    
    
    
}
console.log(myArr);
// Only change code above this line
module.exports = multiplication;