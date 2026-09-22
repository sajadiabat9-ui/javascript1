
// let name = prompt("Enter your name");
// document.writeln( "name : " + name + "<br>" );
// console.log( name);
// let age = prompt("Enter your age");
// document.writeln( "age : " + age + "<br>");
// console.log(age);
// let gender = prompt("Enter your gender, male/female");
// document.writeln( "gender:  " + gender + "<br>" );
// console.log(gender);



// if (gender === "male") { 
//     alert("Welcome Mr. " + name);
// } else if (gender === "female") { 
//     alert("Welcome Ms. " + name);
// } else {
//     alert("Welcome" + name);
// }


// if (age < 16) { 
//     alert("You are not eligible to place an order");
// } else {
//     alert("Continue to order");
// }

// let order = prompt("Please enter one of the following: Burger, Shawarma, Zinger");
// let orderStatus;

// if (order == "Burger" || order == "Shawarma" || order == "Zinger") {
//     orderStatus="valid";
//     alert("Your order is being prepared");
//      document.writeln("orderstatus: " + orderStatus);
//     document.writeln( "your order is : " + order + "<br>");
// } else {
//     orderStatus="invalid";
//     alert("Invalid order. Please try again.");
//     document.writeln( "your orderstatus is : " + orderStatus + "<br>");
// }


// if (age >= 18 && orderStatus == "valid") {
//     alert("Order confirmed");
// } else if (age < 18 || orderstatus == "invalid") {
//     alert("Order requires verification");
// }

// // let name = prompt("Enter your name");
// // document.writeln( "name : " + name + "<br>" );
// // console.log( name);
// // let age = prompt("Enter your age");
// // document.writeln( "age : " + age + "<br>");
// // console.log(age);
// // let gender = prompt("Enter your gender, male/female");
// // document.writeln( "gender:  " + gender + "<br>" );
// // console.log(gender);



// // if (gender === "male") { 
// //     alert("Welcome Mr. " + name);
// // } else if (gender === "female") { 
// //     alert("Welcome Ms. " + name);
// // } else {
// //     alert("Welcome" + name);
// // }


// // if (age < 16) { 
// //     alert("You are not eligible to place an order");
// // } else {
// //     alert("Continue to order");
// // }

// // let order = prompt("Please enter one of the following: Burger, Shawarma, Zinger");
// // let orderStatus;

// // if (order == "Burger" || order == "Shawarma" || order == "Zinger") {
// //     orderStatus="valid";
// //     alert("Your order is being prepared");
// //      document.writeln("orderstatus: " + orderStatus);
// //     document.writeln( "your order is : " + order + "<br>");
// // } else {
// //     orderStatus="invalid";
// //     alert("Invalid order. Please try again.");
// //     document.writeln( "your orderstatus is : " + orderStatus + "<br>");
// // }


// // if (age >= 18 && orderStatus == "valid") {
// //     alert("Order confirmed");
// // } else if (age < 18 || orderstatus == "invalid") {
// //     alert("Order requires verification");
// // }

// //task2 js

// // //ex1
// // const menu = [
// //   {
// //     name: "mashawi",
// //     price: 9.99,
// //     category: "Main Course",
// //     available: true
// //   },
// //   {
// //     name: "Shawerma",
// //     price: 12.50,
// //     category: "Main Course",
// //     available: true
// //   },
// //   {
// //     name: "salad",
// //     price: 7.25,
// //     category: "Appetizers",
// //     available: false
// //   },
// //   {
// //     name: "French Fries",
// //     price: 3.50,
// //     category: "Sides",
// //     available: true
// //   },
// //   {
// //     name: "Chocolate Lava Cake",
// //     price: 6.00,
// //     category: "Desserts",
// //     available: true
// //   }
// // ];
// // //ex1
// // function showMenu() {
// //   for (let i = 0; i < menu.length; i++) {
// //     console.log(menu[i].name , menu[i].price);
// //   }
// // }

// // showMenu();


// // //ex2






// // //ex3

// // while (true) {
// //         foodName = prompt("Enter food name: ");
// //         selectedFood = null;

// //         for (let i = 0; i < menu.length; i++) {

// //             if (menu[i].available === false) {
// //                 continue;
// //             }

// //             if (menu[i].name.toLowerCase() == foodName.toLowerCase()) {

// //                 selectedFood = menu[i];

// //                 break;
// //             }
// //         }
// //         if (selectedFood !== null) {
// //             break;
// //         }
// //     }
 
// //     //ex4
// // // for (let i in menu) {
// // //   console.log(menu[i]);
// // // }

// // // ex4


// ex1: تعريف المنيو والدالة
const menu = [
  {
    name: "mashawi",
    price: 9.99,
    category: "Main Course",
    available: true
  },
  {
    name: "Shawerma",
    price: 12.50,
    category: "Main Course",
    available: true
  },
  {
    name: "salad",
    price: 7.25,
    category: "Appetizers",
    available: false
  },
  {
    name: "French Fries",
    price: 3.50,
    category: "Sides",
    available: true
  },
  {
    name: "Chocolate Lava Cake",
    price: 6.00,
    category: "Desserts",
    available: true
  }
];

function showMenu() {
  for (let i = 0; i < menu.length; i++) {
    console.log(menu[i].name, menu[i].price);
  }
}

showMenu();


// ex2 & ex3
let selectedFood = null;

while (true) {
  let foodName = prompt("Enter food name: ");

  for (let i = 0; i < menu.length; i++) {
    // 5. Use continue to skip unavailable food items
    if (menu[i].available === false) {
      continue;
    }

   
    if (menu[i].name.toLowerCase() === foodName.toLowerCase()) {
      selectedFood = menu[i];
      break; 
    }
  }

  // stop if food exixt
  if (selectedFood !== null) {
    break;
  }
}

// use for in for selected food
for (let key in selectedFood) {
  console.log(key + ": " + selectedFood[key]);
} 
 

document.write("<h2>Order Details:</h2>");

for (let key in selectedFood) {
  document.write(key + ": " + selectedFood[key] + "<br>");
}




//function task 



// function 1:
function reverse (){
    let number= prompt("plz,insert 5 digit numbers");
    for(let i = number.length - 1; i >= 0; i--){
    console.log(number[i]);
    }
}reverse();

// function 2:
for(let j = 0; j<= 15 ; j++ ){
    if(j % 2 == 0){
        console.log(j + " is even");
    }

    else{
        console.log(j + " is odd");
    }
}

// function 3:
let num = prompt("Enter a number: (6 digits)"); 
let result = ""; 

for (let i = 0; i < num.length; i++) {

    result = result + num[i]; 


    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
        result = result + "-"; 
    }
}
console.log(result);


// function 4:
function Agechecker(){
    let age = prompt("plz,enter your age : ");
    if(age >= 18){
        console.log("The user is Adult");
    }
    else {
        console.log("The user is Minor");
    }
}
Agechecker();
 
