interface IPersonaldtl {
    name: string;
    age: number
}
interface IDepartment {
    dept: string;
}

type IStudents = IPersonaldtl | IDepartment;

let Samp: IStudents = {
    name: 'Tom',
    age: 21,
}

//Samp=3; // Type '3' is not assignable to type 'IUnionType'

Samp = {
    dept: 'ECE'
}
/*Type Guard*/
class Student {
    study() {

    }
}
class Professor {
    teach() {

    }
}
function getPersson(n: number): Student | Professor {
    if (n === 1) {
        return new Professor();
    }
    else {
        return new Student();
    }
}
let person: Student | Professor = getPersson(1);
if (person instanceof Student) {
    person.study();
}
else {
    //person.study();//Error, Person is of type Professor
    person.teach();
}
/*Alias*/
type IPersonaldtlAlias = IPersonaldtl;
let alias: IPersonaldtlAlias = {
    name: 'Natasha',
    age: 32
}
/*Generic Alias*/
interface GenericInterface<T1, T2> {
    x: T1,
    y: T2
}
let c: GenericInterface<number, string> = {
    x: 3,
    y: 'Hello'
}
type GenericAlias<T> = GenericInterface<T, T>;
let d: GenericAlias<number> = {
    x: 1,
    y: 2
}