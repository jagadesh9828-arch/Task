//1
let a = "jagadesh";
console.log(`Name: ${a}`);
const b = "EMP101";
console.log(`Employee ID: ${b}`);
const c = "Development";
console.log(`Department: ${c}`);
let d = "28000";
console.log(`Salary: ${d}`);
let e = "true";
console.log(`Permanent : ${e}`);

//2 array
let  skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

console.log("Skill 1: " + skills[0]);
console.log("Skill 2: " + skills[5]);
console.log("Skill 3: " + skills[6]);
console.log("Skill 4: " + skills[3]);
console.log("Skill 5: " + skills[4]);

//3.company object
const company = {
    companyname: "Stackly",
    location: "Chennai",
    employeeCount: 100,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"]
};
console.log("Company Name: " + company.companyname);
console.log("Location: " + company.location);
console.log("Employee Count: " + company.employeeCount);
console.log("First Technology: " + company.technologies[0]);
console.log("Second Technology: " + company.technologies[1]);

//4.salary calculation
let baseSalary = 28000;
let bonus = 5000;
let totalSalary = baseSalary + bonus;
console.log("Total Salary: " + totalSalary);
let tax = 0.10;
let taxAmount = totalSalary * tax;
console.log("Tax Amount: " + taxAmount);
let finalSalary = totalSalary - taxAmount;
console.log("Final Salary: " + finalSalary);

//5.Attendance check ternary operator
let attendance = 92;
let attendanceStatus = (attendance >= 90) ? "Eligible for Exam" : "Not Eligible for Exam";
console.log("Attendance Status: " + attendanceStatus);

//6. login verification
let username = "jagadesh";
let password = "password123";
let loginStatus = (username === "jagadesh" && password === "password123") ? "Login Successful" : "Login Failed";
console.log("Login Status: " + loginStatus);

//7. product billing
let productname = "Laptop";
let productPrice = 1000;
let quantity = 5;               

let totalAmount = productPrice * quantity;
console.log("productname: " + productname);
console.log("productPrice: " + productPrice);
console.log("quantity: " + quantity);
console.log("totalAmount: " + totalAmount);

//8.increment and decrement
let x = 10;
console.log("Initial Value of x: " +x);
console.log("Value of x after increment: " + ++x);
console.log("Value of x after decrement: " + --x);
console.log("Value of x after increment: " + x++);
console.log("Value of x after decrement: " + x--);

//9.comparison operators
let num1 = 10;
let num2 = 20;
console.log (num1 == num2);
console.log(num1 != num2);
console.log (num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

//10. user interaction prompt and confirm and alert
let EmployeeName = prompt("Please enter your name:");
console.log("Name: " + EmployeeName);
let EmployeeAge = prompt("Please enter your age:");
console.log("Age: " + EmployeeAge);
let joinOurCompany = confirm("Do you want to join our company?");
alert("Thank you");


//11 Final task:
alert("Welcome to Employee Portal");



let employee = {
  name: "Kavin",
  id: "EMP1010",
  department: "Development",
  experience: 10,
  salary: 9000,
  company: "Stackly IT",
  location: "Coimbatore"
};
console.log("Employee Name: " + employee.name);
console.log("Employee ID: " + employee.id);
console.log("Department: " + employee.department);  
console.log("Experience: " + employee.experience + " Years");
console.log("Company: " + employee.company);
console.log("Location: " + employee.location);
console.log("Salary: " + employee.salary);

let bonusn=employee.salary >=3 ? 1000 : 500;
console.log("Bonus: " + bonusn);

let finalSalary2 = employee.salary + bonusn;
console.log("employee Salary: " + finalSalary2);

let skills2 = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
console.log("Skills: " + skills2[0] + ", " + skills2[2] + ", " + skills2[2] + ", " + skills2[3] + ", " + skills2[4] + ", " + skills2[5]);

let attendances = 82;
let examStatus = attendances >= 75 ? "Eligible for Exam" : "Not Eligible for Exam";
console.log("Attendance: " + attendances + "%");
console.log("Exam Status: " + examStatus);

let userName = prompt("Please enter your Name:");
let userPassword = prompt("Please enter your Password:");
let loginStatus1 = (userName === "admin" && userPassword === "12345") ? "Login Successful" : "Login Failed";
console.log("Login Status: " + loginStatus1);

confirm("Do you want to submit your tasks?");

//challenge completed:


/// Bonus task in taken as ATM system:

alert("Welcome to ATM System");


let accountName = prompt("Enter Account Holder Name:");
let accountNumber = prompt("Enter Account Number:");
let pin = prompt("Enter ATM PIN");
console.log("Account Holder Name: " + accountName);
console.log("Account Number: " + accountNumber);
console.log("ATM PIN: " + pin);


let transactions = ["Deposit", "Withdraw", "Balance Check"];


let loginStatu =
  pin === "1234" ? "Login Successful" : "Invalid PIN";
  console.warn("Login Status: " + loginStatu);

  let atm = {
  bankName: "Stackly Bank",
  accountHolder: accountName,
  accountNumber: accountNumber,
  balance: 25000
};
console.log("Bank Name: " + atm.bankName);
console.log("Account Holder: " + atm.accountHolder);
console.log("Account Number: " + atm.accountNumber);
console.log("Available Balance:" + atm.balance);


let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));
console.log("Withdrawal Amount: " + withdrawAmount);


let sufficientBalance =
  atm.balance >= withdrawAmount ? "Approved" : "Insufficient Balance";
  console.warn("Transaction Status: " + sufficientBalance);
console.table(transactions);

let finalBalance =
  atm.balance >= withdrawAmount
    ? atm.balance - withdrawAmount
    : atm.balance;
    console.log("Final Balance: " + finalBalance);






