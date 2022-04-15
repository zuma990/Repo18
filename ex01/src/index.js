let myArr = [];
// Only change code below this line

function* multiplication(x){

    for(let i = 0; i < x.length; i++){
        
          x *= 2;
         yield x;
         yield i + x;

       
        myArr.push(x);
    }

    
}

var num = multiplication(3);

for(let i = 0; i <3 ; i++){

    let iter = num.next().value;
    console.log(iter)
    
}

// Only change code above this line
module.exports = multiplication;