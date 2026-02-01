// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

//function checkValue(value) {
//  console.log(value === "test");
//}

//console.log(1 > 0); // true
//console.log(0 > 0); // false
//console.log(-3 > 0);  // false

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

//function checkValue(value) {
//  console.log(value === "test");
//}

//checkValue("test"); // true
//checkValue("qwerty"); // false
//checkValue(true);     // false

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

//let value = 1;
//if (1 < 10) {
//  console.log("10 + 5");
//}

//if (10 >= 10) {
//  console.log("10+5");
//}

//if (13 > 10) {
//  console.log("10 + 5");
//}

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

//function getMonth(number) {
//  switch (number) {
//    case 1:
//      return "Січень";
//    case 2:
//      return "Лютий";
//    case 3:
//      return "Березень";
//    case 4:
//      return "Квітень";
//    case 5:
//      return "Травень";
//    case 6:
//      return "Червень";
//    case 7:
//      return "Липень";
//    case 8:
//      return "Серпень";
//    case 9:
//      return "Вересень";
//    case 10:
//      return "Жовтень";
//    case 11:
//      return "Листопад";
//    case 12:
//      return "Грудень";
//    default:
//      return "Невірне число";
//  }
//}
//console.log(getMonth(6));

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

function sumOfDigits(number) {
  if (number < 100 || number > 999) {
    return "Число має бути тризначним";
  }

  const a = Math.floor(number / 100);
  const b = Math.floor((number % 100) / 10);
  const c = number % 10;

  return a + b + c;
}

console.log(sumOfDigits(125));
