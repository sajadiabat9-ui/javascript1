let name = prompt("Enter your name");
document.writeln( "name : " + name + "<br>" );
console.log( name);
let age = prompt("Enter your age");
document.writeln( "age : " + age + "<br>");
console.log(age);
let gender = prompt("Enter your gender, male/female");
document.writeln( "gender:  " + gender + "<br>" );
console.log(gender);



if (gender === "male") { 
    alert("Welcome Mr. " + name);
} else if (gender === "female") { 
    alert("Welcome Ms. " + name);
} else {
    alert("Welcome" + name);
}


if (age < 16) { 
    alert("You are not eligible to place an order");
} else {
    alert("Continue to order");
}

let order = prompt("Please enter one of the following: Burger, Shawarma, Zinger");
let orderStatus;

if (order == "Burger" || order == "Shawarma" || order == "Zinger") {
    orderStatus="valid";
    alert("Your order is being prepared");
     document.writeln("orderstatus: " + orderStatus);
    document.writeln( "your order is : " + order + "<br>");
} else {
    orderStatus="invalid";
    alert("Invalid order. Please try again.");
    document.writeln( "your orderstatus is : " + orderStatus + "<br>");
}


if (age >= 18 && orderStatus == "valid") {
    alert("Order confirmed");
} else if (age < 18 || orderstatus == "invalid") {
    alert("Order requires verification");
}