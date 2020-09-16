function Add(x: number, y: number): number {//function with parameter and return types
    return x + y;
}
/*Anonymus function*/
let sum = function (x: number, y: number) {
    return x + y;
}
sum(2, 3);

/*Optional parameters*/
function Name(firstName: string, lastName?: string) {
    return `${firstName} ${lastName}`;
}
Name('Robert');//returns Robert
Name('Robert', 'Downey') //retuns Robert Downey
//Name('Robert','Downey','Jr') // error

/*Default Parameter*/
function empName(fname = 'Scarlet', lname: string): string {
    return fname + " " + lname;
}

empName(undefined, 'Johansson');//returns Scarlet Johansson
//empName('Johansson')//error expects 2 param
empName('Black', 'Widow')//returns Black Widow

/*Rest Parameters*/
function namelist(name1: string, ...othername: string[]): string {
    return name1 + '' + othername.join(' ');
}
let listofnames = namelist('Stark', 'Cap', 'Nat', 'Ruffalo'); // retuns Stark Cap Nat Rufffalo

/*this & arrow function*/
//It will through an error in this scope of this is where the fun is invoked
let deck = {
    suits: ['hearts', 'diamond', 'spades', 'clubs'],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickCard = Math.floor(Math.random() * 52);
            let pickSuit = Math.floor(pickCard / 13);
            return { suit: this.suit[pickSuit], card: pickSuit % 13 };
        };
    },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('Card' + pickedCard.card + ' of ' + pickedCard.suit);

//this will work,Arrow functions capture the this where the function is created
let deck1 = {
    suit: ['heart', 'daimond', 'spade', 'clover'],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suit[pickedSuit], card: this.pickedCard % 13 };
        };
    },
};
let cardPicker1 = deck.createCardPicker();
let pickedCard1 = cardPicker();
console.log('Cards' + pickedCard.card + ' of ' + pickedCard.suit);