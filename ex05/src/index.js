// Only change code below this line
let arrKey = [];
let arrValue = [];
let  shoppingList = new Map([

    
       ["Banana", 3],
       ["Pineapple", 5],
       ["Pear", 2],
       ["Carrot", 10],
       ["Apple", 1.5],
    
])
for (let col of shoppingList.keys()) {


    let arrKey = [];
    arrKey.push(col);
    console.log(`groceries: ${arrKey}`);

}
for (let col of shoppingList.values()) {


    let arrValue = [];
    arrValue.push(col);
    console.log(`amount: ${arrValue}`);

}
for (let col of shoppingList.entries()) {


    console.log(`[ '${col[0]}', ${col[1]} ]`);

}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };