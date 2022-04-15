function* myGenerator(x,y,z) {

    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* [x, y, z];
}
var iterator = myGenerator(6, 7, 8);
const generatorArray = [];

for (let i = 0; i <13; i++) {

    let iter = iterator.next();
    
    
    generatorArray[i] = iter.value;

    
}
console.log(generatorArray)
module.exports = { generatorArray, myGenerator };