const student = {
    name: "예영근",
    age: 21,
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';
console.log(student[a]);
console.log(student[b]);
student[a] = '김준이';
console.log(student);
student.name = '김준삼';
console.log(student);

student.printName = () => console.log("이름:", student.name);
student.printName();
const loginButton = {
    text: "로그인",
    value: "text",
    onclick: () => {
        console.log(loginButton.text)
    },
}

loginButton.onclick();
loginButton.onclick = () =>  {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();

console.log(typeof(loginButton));

const loginButtonKeys = Object.keys(loginButton);
// loginButtonKeys = ["text", "value",  "onclick"];
console.log(loginButtonKeys);
for(let i = 0; i < loginButtonKeys.length; i++) {
    const KeyName = loginButtonKeys[i];
    console.log(loginButton[loginButtonKeys[i]]);
}

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for(let i = 0; i < loginButtonValues.length; i++) {
    console.log(loginButtonValues[i]);
}

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for(let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const Key = entry[0];
    const value = entry[1];
    console.log(entry, Key, value);
}

for(let entry of loginButtonEntries) {
    const Key = entry[0];
    const value = entry[1];
    console.log(entry, Key, value);
}