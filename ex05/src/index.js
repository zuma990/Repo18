// Only change code below this line

let  shoppingList = new Map([

       ["Banana", 1],
       ["Pineapple", 2],
       ["Pear", 3],
       ["Carrot", 5],
       ["Apple", 7],
])
for (let value of shoppingList.entries()) {

    let arrKey = value[0];
    console.log(arrKey)
   // console.log(`${value[0]}: ${value[1]}`);

}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };