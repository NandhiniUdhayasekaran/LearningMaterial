/*If...else*/
let xy: number = 10, z = 20;

xy > z?  console.log('xy is greater than z.'):  console.log('xy is less than or equal to z.');

/*for....of Loop*/
let arr = [11,22,33,44,55,66];
let str = 'Nandhini';
for(let val of arr){
    console.log(val); //returns 11 22 ... 66
}
for(let val of str){
    console.log(val); //returns N a n d h i n i
}

/*for....in loop*/
for(let index in arr){
    console.log(index); // retuns index of arr :0,1,2,3...
    console.log(index); //retuns value of arr: 11,22....
}

