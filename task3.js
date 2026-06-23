//1.Employee information system Requirements
let a= prompt("Enter Employee Name:");
let b= prompt("Enter Employee Age:");
console.log("Employee Name: " + a);
console.log("Employee Age: " + b);
let c= prompt("Enter Employee Department:");
let d= prompt("Enter Employee Salary:");
//ojectcreate
let employee = {
    department: c,
    salary: d
};
console.log("Employee Department: " + employee.department);
console.log("Employee Salary: " + employee.salary);

if (employee.salary > 5000) {
    console.log("Employee is eligible for bonus.");
}
else {
    console.log("Employee is not eligible for bonus.");
}

//2.supermarket billing system
let productname = prompt("Enter Product Name:");
let productPrice = prompt("Enter Product Price:");
let quantity = prompt("Enter Quantity:");

console.log("Product Name: " + productname);
console.log("Product Price: " + productPrice);
console.log("Quantity: " + quantity);

let totalBill = productPrice * quantity;
console.log("Total Bill: " + totalBill);
let finalAmount;

if (totalBill > 1000) {
    let discount = totalBill * 0.10;
    finalAmount = totalBill - discount;
   
}
else {
    finalAmount = totalBill;
}
console.log("Final Amount: " + finalAmount);

//3. student Results
let studentName = prompt("Enter Student Name:");
let marks = Number( prompt("Enter Marks:"));

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}   
else{
    console.log("Fail");
}

// 4ATM Eligibility Requirements
let username = prompt("Enter Username:");
let accountBalance = Number( prompt("Enter Account Balance:"));
let withdrawalAmount = Number( prompt("Enter Withdrawal Amount:"));

if (accountBalance >= withdrawalAmount) {
    console.log("Transaction successful.");
} else {
    console.log("Insufficient balance.");
}

//5.login validation

let username1 = prompt("Enter Username:");
let password1 = prompt("Enter Password:");
if (username1 === "admin" && password1 === "password123") {
    console.log("Login successful.");
}   else {
    console.log("Invalid username or password.");
}

//6.online Food Ordering System using array,for...of loop and object
let firstitem = {
    name: "Burger",
    price: 10
};
let seconditem = {
    name: "Fries",
    price: 5
};
let thirditem = {
    name: "Soda",
    price: 2
};

let menu = [firstitem, seconditem, thirditem];

for (let item of menu) {
    console.log("Item: " + item.name + ", Price:" + item.price);
}
