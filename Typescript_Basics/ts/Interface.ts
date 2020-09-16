interface IStudent {
    StuCode: number;
    StuName: string;
    getMark: (number) => number;
    getDept(number): string;
}
/*Interface as type*/
interface IKeyvaluePair {
    key: number;
    value: string;
}
let getKeyValue1: IKeyvaluePair = { key: 1, value: 'Stark' };
//let getKeyValue12:IKeyvaluePair ={key:1,val:123}  //Compile erroe

/*Optional Parameter*/
interface IsquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: IsquareConfig): { color: string, area: number } {
    let newSquare = { color: 'purple', area: 100 };
    config.color != null ? newSquare.color = config.color : newSquare;
    config.width != null ? newSquare.area = config.width * config.width : newSquare;
    return newSquare
}
let mySquare = createSquare({ color: 'blue' });

/*Function types*/
interface Isearchfunc {
    (source: string, suString: string): boolean;
}
let search: Isearchfunc;
search = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

/*Indexable types*/
interface InameList {
    [index: number]: string; //string array
}
let nameList: InameList;
nameList = ['Peter', 'Parker'];
console.log(nameList[0]);

/*Extends*/
interface IiceCream {
    name: string;
    price: number;
}
interface Ibrand extends IiceCream {
    flavour: string;
}
let icecream: Ibrand = {
    name: 'Corneto',
    price: 50,
    flavour: 'ButterScotch'
}

/*Class*/
interface IanimalConstructor {
    new(breed: string, type: string): IanimalInterface;
}
interface IanimalInterface {
    sound(): void;
}
function getAnimalsound(
    ctor: IanimalConstructor,
    breed: string,
    type: string,
): IanimalInterface {
    return new ctor(breed, type);
}
class dog implements IanimalInterface {
    constructor(breed: string, type: string) { }
    sound() {
        console.log("Bow bow");
    }
}
class cat implements IanimalInterface {
    constructor(breed: string, type: string) { }
    sound() {
        console.log("pur pur");
    }
}
let Dog = getAnimalsound(dog, 'Golden Retriever', 'pet');
let Cat = getAnimalsound(cat, 'Ragdoll', 'Pet');

/*Extending Interface*/
interface Dress {
    price: number;
}
interface Shirt extends Dress {
    size: string;
}
let shirt = {} as Shirt;
shirt.size = "M";
shirt.price = 1000;

