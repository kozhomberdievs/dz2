// var str = "Text";
// var num = 10;
// var a;

// console.log(a);
// console.log(num > 200);
// console.log(num < 100);
// console.log("text" / num);
// console.log(typeof num);
// console.log(typeof str);

var sum = prompt("Введите сумму покупки: ");

if (isNaN(sum) || sum < 0) {
  console.log("Ошибка: введите корректное положительное число.");
} else {
  var discount = 0;

  if (sum < 100) {
    discount = 0.0;
  } else if ((sum) >= 100 && sum < 500) {
    discount = 0.05;
  } else if ((sum) >= 500 && sum <= 1000) {
    discount = 0.1;
  } else if (sum > 1000) {
    discount = 0.15;
  }
}

var price = sum - sum * discount;

price = price.toFixed(2);

console.log("Сумма покупки: " + sum + " сом");
console.log("Ваша скидка: " + sum * discount + " сом");
console.log("Итого к оплате: " + price + " сом");
