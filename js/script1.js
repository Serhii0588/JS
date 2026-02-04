let num;

// Варіант 1
num = 1;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Варіант 2
num = 0;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Варіант 3
num = -3;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

//2

let value = "test";
console.log(value === "test");

//3

let a = 1;
if (a > 10) {
  console.log(a - 5);
} else {
  console.log(a + 5);
}

//4

let num;

// Варіант 1
num = 1;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Варіант 2
num = 0;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

// Варіант 3
num = -3;
if (num > 0) {
  console.log(true);
} else {
  console.log(false);
}

//5

let num = 456;

if (num < 100 || num > 999) {
  console.log("Число має бути тризначним");
} else {
  let a = Math.floor(num / 100); // сотні
  let b = Math.floor((num % 100) / 10); // десятки
  let c = num % 10; // одиниці
  console.log(a + b + c);
}
