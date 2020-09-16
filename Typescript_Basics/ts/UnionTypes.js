let Samp = {
    name: 'Tom',
    age: 21,
};
//Samp=3; // Type '3' is not assignable to type 'IUnionType'
Samp = {
    dept: 'ECE'
};
/*Type Guard*/
class Student {
    study() {
    }
}
class Professor {
    teach() {
    }
}
function getPersson(n) {
    if (n === 1) {
        return new Professor();
    }
    else {
        return new Student();
    }
}
let person = getPersson(1);
if (person instanceof Student) {
    person.study();
}
else {
    //person.study();//Error, Person is of type Professor
    person.teach();
}
let alias = {
    name: 'Natasha',
    age: 32
};
let c = {
    x: 3,
    y: 'Hello'
};
let d = {
    x: 1,
    y: 2
};
//# sourceMappingURL=UnionTypes.js.map