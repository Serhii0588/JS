//-1--//

//function checkAge(age) {
//  if (age > 18) {
//    return true;
//  } else {
//    return confirm("Батьки дозволили?");
//  }
//
//function checkAge(age) {
//  return age > 18 ? true : confirm("Батьки дозволили?");
//
//function checkAge(age) {
//  return age > 18 || confirm("Батьки дозволили?");
//}
//checkAge(17)//

//-2-//

//function min(a, b) {
//  return a < b ? a : b;
//
//console.log(min(3, 7))//
//console.log(min(10, 5))//

//-3-//

//function ask(question, yes, no) {
//  if (confirm(question)) yes();
//  else no();
//}
//ask(
//"Ви згодні?",
//   function () {
//       alert("Ви погодились.");
//   },
//   function () {
//       alert("Ви скасували виконання.");
//   },
//
//const ask = (question, yes, no) => {
//  if (confirm(question)) yes();
//  else no();
//};

//ask(
//  "Ви згодні?",
//  () => alert("Ви погодились."),
//  () => alert("Ви скасували виконання."),
//);
