/**
 * javascript class
 */

class Student {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const newStudent1 = new Student('예영근', 21);
console.log(newStudent1);
console.log(newStudent1.name);