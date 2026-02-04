//--1

const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];

const names = fruts.map((fruit) => fruit.name);

console.log(names);

//--2

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

//--3

let num;

while (true) {
  num = prompt("Введіть число більше за 100:");

  if (num === null || num === "") break;

  num = Number(num);

  if (num > 100) break;
}

console.log("Введене число:", num);

//--4

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let sum = 0;

for (let i = 0; i < girls.length; i++) {
  sum += girls[i].age;
}

let average = sum / girls.length;

console.log("Середній вік:", average);
