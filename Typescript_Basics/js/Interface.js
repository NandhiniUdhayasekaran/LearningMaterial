let getKeyValue1 = { key: 1, value: 'Stark' };
function createSquare(config) {
    let newSquare = { color: 'purple', area: 100 };
    config.color != null ? newSquare.color = config.color : newSquare;
    config.width != null ? newSquare.area = config.width * config.width : newSquare;
    return newSquare;
}
let mySquare = createSquare({ color: 'blue' });
let search;
search = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let nameList;
nameList = ['Peter', 'Parker'];
console.log(nameList[0]);
let icecream = {
    name: 'Corneto',
    price: 50,
    flavour: 'ButterScotch'
};
function getAnimalsound(ctor, breed, type) {
    return new ctor(breed, type);
}
class dog {
    constructor(breed, type) { }
    sound() {
        console.log("Bow bow");
    }
}
class cat {
    constructor(breed, type) { }
    sound() {
        console.log("pur pur");
    }
}
let Dog = getAnimalsound(dog, 'Golden Retriever', 'pet');
let Cat = getAnimalsound(cat, 'Ragdoll', 'Pet');
let shirt = {};
shirt.size = "M";
shirt.price = 1000;
//# sourceMappingURL=Interface.js.map