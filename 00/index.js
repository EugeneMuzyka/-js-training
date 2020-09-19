const name = "Tiberiy";
const surname = "Rimskiy"
const age = 32;
const text = `Hello,world! Встречай,JS! Я ${name} ${surname}, my age is ${age} years old. Рад встрече!`;
alert(text);
console.log(text);

let user = {
    name: "Oleg",
    growth: 180,
    age: 27,
    smoking: "no smoking",
    frend_list: "Igor' Leonow, Olga Sidorova, Ivan Ogurcow",
    canSingSongs: "Oleg can sing",

}
user.frend_list = null;
console.log(user.frend_list)
console.log(user.growth);
console.log(user)