const student = {
    name: '예영근',
    age: 21,
    address: '부산 북구',
    phone: '010-1234-5678',
}

// 비구조 할당
const{ name, address } = student;
console.log(name, address);

// REST 문법
const { age, phone, ...rest } = student;
console.log(age, phone, rest);

const numbers = [1,2,3,4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// 객체 spread
const newStudent = {
    ...student,
    gender: '남',
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

const newNumbers2 = numbers;    // 얇은 복사

let names = [];

function addName(name) {
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj);
