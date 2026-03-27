// var str = "Text";
// var num = 10;
// var a;

// console.log(a);
// console.log(num > 200);
// console.log(num < 100);
// console.log("text" / num);
// console.log(typeof num);
// console.log(typeof str);

// var sum = prompt("Введите сумму покупки: ");

// if (isNaN(sum) || sum < 0) {
//   console.log("Ошибка: введите корректное положительное число.");
// } else {
//   var discount = 0;

//   if (sum < 100) {
//     discount = 0.0;
//   } else if ((sum) >= 100 && sum < 500) {
//     discount = 0.05;
//   } else if ((sum) >= 500 && sum <= 1000) {
//     discount = 0.1;
//   } else if (sum > 1000) {
//     discount = 0.15;
//   }
// }

// var price = sum - sum * discount;

// price = price.toFixed(2);

// console.log("Сумма покупки: " + sum + " сом");
// console.log("Ваша скидка: " + sum * discount + " сом");
// console.log("Итого к оплате: " + price + " сом");

const orders = [
  {
    id: 1,
    customer: "Jhon",
    items: [
      { name: "Ноутбук", price: 50000, quantity: 1 },
      { name: "Мышь", price: 1500, quantity: 2 },
    ],
  },
  {
    id: 2,
    customer: "Alan",
    items: [
      { name: "Телефон", price: 30000, quantity: 1 },
      { name: "Чехол", price: 1000, quantity: 3 },
    ],
  },
  {
    id: 3,
    customer: "Jane",
    items: [
      { name: "Клавиатура", price: 2500, quantity: 1 },
      { name: "Монитор", price: 12000, quantity: 1 },
    ],
  },
];




let total = 0;       
let maxSum = 0;            
let maxCustomer = "";       

for (let i = 0; i < orders.length; i++) {
  let orderSum = 0;

  for (let j = 0; j < orders[i].items.length; j++) {
    let item = orders[i].items[j];
    orderSum += item.price * item.quantity;
  }
  console.log("Заказ номер: " + orders[i].id + " (" + orders[i].customer + "): " + orderSum);
  total += orderSum;

  if (orderSum > maxSum) {
    maxSum = orderSum;
    maxCustomer = orders[i].customer;
  }
}

console.log("Общий доход:", total);
console.log("Самый дорогой заказ сделал:", maxCustomer, "-", maxSum);