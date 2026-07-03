//1.Student mangement system
let students = [
    {
        name: "Naveen",
        id: 101,
        mark: 85
    },
    {
        name: "John",
        id: 102,
        mark: 45
    },
    {
        name: "Arun",
        id: 103,
        mark: 25
    }
];

//  Print all students

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

//  Print only student names

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

//  Find student ID 102

for (let i = 0; i < students.length; i++) {
    if (students[i].id === 102) {
        console.log("Found:"+ students[i].name + " (ID: " + students[i].id + ")");
    }
}

//  Print students who passed (mark >= 35)

for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
        console.log("Found:"+ students[i].name + " passed with " + students[i].mark + " marks.");
    } else {
        console.log(students[i].name + " failed.");
    }
}

//  Count total students

let totalCount = students.length;
console.log("Total student count is:" + totalCount);

//2.Emp Saalary 


let salaryEmployees = [
    { name: "Naveen", salary: 30000 },
    { name: "John", salary: 45000 },
    { name: "Arun", salary: 60000 }
];

//  Find highest salary

let highSalary = Math.max(...salaryEmployees.map(( emp ) => emp.salary));
console.log("The highest salary is:" + highSalary);

//  Find lowest salary

let lowestSalary = Math.min(...salaryEmployees.map(( emp ) => emp.salary));
console.log("The lowest salary is: ₹" + lowestSalary);

//  Add ₹5000 bonus

let employeesWithBonus = salaryEmployees.map(emp => ({
    ...emp,
    salary: emp.salary + 5000
}));
console.log(employeesWithBonus);

// Print total salary

let totalSalary = salaryEmployees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total payout for all employees:" + totalSalary);

//  Print employees earning above ₹40,000

let highEarners = salaryEmployees.filter((emp) => emp.salary > 40000);
highEarners.forEach(({ name, salary }) => {
    console.log(name + " earns " + salary);
});

//3.Shopping Cart

let products = [
    { name: "Laptop", price: 50000, quantity: 2 },
    { name: "Mouse", price: 500, quantity: 5 },
    { name: "Keyboard", price: 1000, quantity: 3 }
];
//product name
products.forEach(product => {
    console.log(product.name);
});
//product bill
let totalbill = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
console.log("Total Bill:" + totalbill);

//Search product mouse
let searchProduct = products.find(product => product.name === "Mouse");
console.log("Search Result: " + (searchProduct ? searchProduct.name : "Product not found"));

//Apply 10% discount
let discount = products.map(product =>({...product,
    price: product.price * 0.9
}));
console.log("Products 10% discount:", discount);

//print final bill
let finalBill = discount.reduce((sum, product) => sum + (product.price * product.quantity), 0);
console.log("Final Bill after discount:" + finalBill);

//4.Bank Account

let account ={
    name: "naveen",
    balance: 50000
}
//deposit money 10,000
let depositAmount = 10000;
account.balance += depositAmount;
console.log("Account balance: " + account.balance);

//withdraw money 5,000 sucessfully withdrawn
let withdrawAmount = 5000;
if (withdrawAmount <= account.balance) {
    account.balance -= withdrawAmount;
    console.log("Withdrawn: " + withdrawAmount);
//current balance
    console.log("Account balance: " + account.balance);
}

//check balance is below 20000
if (account.balance < 20000) {
    console.log("Warning: Your account balance is below ₹20,000.");
}

//print details
console.log("Account Holder: " + account.name);
console.log("Current Balance: " + account.balance);

//5.company Login

let username = "admin";
let password = "12345";
let user = prompt("Enter username:");
let pass = prompt("Enter password:");

if (user === username && pass === password) {
    console.log("Welcome!");
} else {
    console.log("Invalid username or password.");
}

//6. Traffic Signal

let Color = prompt("Enter traffic signal color (red, yellow, green):").toLowerCase();

switch (Color) {
    case "red":
    
        console.log("Stop the vehicle.");
        break;
    case "yellow":
        console.log("Ready to move.");
        break;
    case "green":
        console.log("Ready to Race...");
        break;
    default:
        console.log("Invalid signal color.");
}
//7.ATM Withdraw


let balance = 1000;

let choice = prompt(
    "1 Balance\n" +
    "2 Deposit\n" +
    "3 Withdraw\n" +
    "4 Exit\n\n" +
    "Enter your choice (1-4):"
);

switch (choice) {
    
    case '1':
      
        alert("Your current balance is:" + balance);
        break;
        
    case '2':
        let depositAmount = Number(prompt("Enter amount to deposit:"));
        balance = balance + depositAmount;
        alert("Deposit successful. Your new balance is:" + balance);
        break;
        
    case '3':
       
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        if (withdrawAmount <= balance) {
            balance = balance - withdrawAmount;
            alert("Withdrawal successful. Your new balance is:" + balance);
        } else {
            alert("Insufficient funds!");
        }
        break;
        
    case '4':
       
        alert("Exiting ATM. Have a great day!");
        break;
        
    default:
       
        alert("Invalid choice. Please refresh the page and enter a number from 1 to 4.");
        break;
}
//8.cricket score

let score = [10, 25, 40, 60, 80, 100];


let highestScore = Math.max(...score);
console.log("Highest score: " + highestScore);


let lowestScore = Math.min(...score);
console.log("Lowest score: " + lowestScore);

let totalScore = score.reduce((sum, current) => sum + current, 0);
console.log("Total score: " + totalScore);

let averageScore = totalScore / score.length;
console.log("Average score: " + averageScore);

//9.Movie Ticket Booking

let Booking = confirm("Welcome to the Movie Ticket Booking system. Would you like to book a ticket?");


if (Booking) {
    
    let userAge = prompt("Please enter your age:");
    
    let age = Number(userAge);
    
    if (age >= 18) {
        
        alert("Allow to Enjoy the  Movie!");
        
    } else {
        
        alert("Not Allowed: You must be 18 or older to watch this movie.");
        
    }
    
} else {
    
    alert("Booking cancelled.");
}

//10. Hospoital  Appointment

let token = prompt(
   
    "Enter Token:\n" +
    "1 - Doctor A\n" +
    "2 - Doctor B\n" +
    "3 - Doctor C"
);


switch (token) {
    
    case '1':
        alert("Your appointment is with Doctor A.");
        break;
        
    case '2':
        alert("Your appointment is with Doctor B.");
        break;
        
    case '3':
        alert("Your appointment is with Doctor C.");
        break;
        
    default:
        alert("Invalid Token.");
        break;
}

// 11.Array Menthod Practice

let fruits = ["Apple", "Orange", "Banana"];
console.log("Initial Array:", fruits);


fruits.push("Mango");
console.log(" push('Mango'):", fruits);


fruits.pop();
console.log(" pop():", fruits);


fruits.shift();
console.log(" shift():", fruits);


fruits.unshift("Strawberry");
console.log("unshift('Strawberry'):", fruits);


fruits.splice(1, 0, "Grapes");
console.log("splice(1, 0, 'Grapes'):", fruits);


let slicedFruits = fruits.slice(1, 3);
console.log(" slice(1, 3):", slicedFruits);
console.log(" after slice:", fruits);

//12. Higher order Menthod

let employees2 = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 35000 },
    { name: "C", salary: 50000 },
    { name: "D", salary: 70000 }
];

let salaries2 = employees2.map(emp => {
    return { name: emp.name, salary: emp.salary + 5000 };
});
console.log("1.Salaries:", salaries2);

let high = employees2.filter(emp => emp.salary > 30000);
console.log("2. Salary :", high);

let targetEmployee2 = employees2.find(emp => emp.salary === 50000);
console.log("3. Employee with Salary :", targetEmployee2);

let totalSalary2 = employees2.reduce((total, emp) => total + emp.salary, 0);
console.log("4. Total Salary" + totalSalary2);

let highEarner = employees2.some(emp => emp.salary > 60000);
console.log("5. Has high earner: " , highEarner);

let above15k = employees2.every(emp => emp.salary > 15000);
console.log("6. Everyone earns > 15,000", above15k);

//13. String
let company = " Stackly IT ";
let upperCase = company.toUpperCase();
console.log("1. Uppercase:", upperCase);

let lowerCase = company.toLowerCase();
console.log("2. Lowercase:", lowerCase);

let noSpaces = company.replaceAll(" ", "");
console.log("3. Remove ALL spaces:", noSpaces);

let replaced = company.replace("IT", "Software");
console.log("4. Replace 'IT':", replaced);

let Stackly = company.includes("Stackly");
console.log("5. Contains 'Stackly':", Stackly);

let split = company.split(1);
console.log("6. Split by space (original):", split);

//14.Digital Clock

let secondsPassed = 0;
let clockInterval = setInterval(() => {
    
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    console.log("Current Time: " + timeString);
    secondsPassed++;
    
    if (secondsPassed === 10) {
        
        clearInterval(clockInterval);
        console.log(" Clock stopped after 10 seconds.");  
       
    }
    }, 1000); 

//15. Fake api
async function analyzeProducts() {
    try {
      
        let response = await fetch("https://fakestoreapi.com/products");
        
        
        let products = await response.json();

        let titles = products.map(product => product.title);
        console.log( titles);

        let prices = products.map(product => product.price);
        console.log( prices);

        let expensiveProducts = products.filter(product => product.price > 100);
        console.log( expensiveProducts);

        let totalCount = products.length;
        console.log( totalCount);

    
        let categories = [...new Set(products.map(product => product.category))];
        console.log( categories);

    } catch (error) {
        console.error( error);
    }
} analyzeProducts();

// challenge

// Employee Payroll System


let employees = [
    { id: 1, name: "Aarav Sharma", salary: 35000 },
    { id: 2, name: "Priya Patel", salary: 45000 },
    { id: 3, name: "Rahul Verma", salary: 28000 }
];

function displayCurrentDateTime() {
    const now = new Date();
    console.log(`\n--- Current Date & Time: ${now.toLocaleString('en-IN')} ---`);
}

function fetchEmployeeData() {
    console.log("\nFetching employee data from API...");

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 3; i++) {
                employees.push({
                    id: employees.length + 1,
                    name: data[i].name,
                    salary: Math.floor(Math.random() * 30000) + 30000
                });
            }
            console.log("Data fetched and added successfully! View employees to see the updates.");
            mainMenu();
        })
        .catch(error => {
            console.error("Error fetching data:", error.message);
            mainMenu();
        });
}

function viewEmployees(data = employees) {
    console.log("\n--- Employee List ---");
    if (data.length === 0) {
        console.log("No employees found.");
    } else {
        data.forEach(emp => {
            console.log(`ID: ${emp.id} | Name: ${emp.name} | Salary: ₹${emp.salary}`);
        });
    }
}

function searchEmployee() {
    const inputId = prompt("\nEnter Employee ID to search:");
    const idToSearch = parseInt(inputId, 10);
    const employee = employees.find(emp => emp.id === idToSearch);

    if (employee) {
        console.log(`\nEmployee Found -> ID: ${employee.id}, Name: ${employee.name}, Salary: ₹${employee.salary}`);
    } else {
        console.log("\nEmployee not found!");
    }
    mainMenu();
}

function addBonus() {
    const inputBonus = prompt("\nEnter bonus amount to add to all employees: ₹");
    const bonus = parseFloat(inputBonus);

    if (isNaN(bonus) || bonus <= 0) {
        console.log("Invalid amount.");
    } else {
        employees = employees.map(emp => ({
            id: emp.id,
            name: emp.name,
            salary: emp.salary + bonus
        }));
        console.log(`\n₹${bonus} bonus added to all employees successfully!`);
    }
    mainMenu();
}

function findHighestSalary() {
    if (employees.length === 0) return console.log("No data.");

    const highest = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max), employees[0]);
    console.log(`\nHighest Salary: ₹${highest.salary} (${highest.name})`);
    mainMenu();
}

function findLowestSalary() {
    if (employees.length === 0) return console.log("No data.");

    const lowest = employees.reduce((min, emp) => (emp.salary < min.salary ? emp : min), employees[0]);
    console.log(`\nLowest Salary: ₹${lowest.salary} (${lowest.name})`);
    mainMenu();
}

function calculateTotalSalary() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    console.log(`\nTotal Salary Payout: ₹${total}`);
    mainMenu();
}

function filterHighSalary() {
    const highEarners = employees.filter(emp => emp.salary > 40000);
    console.log("\n--- Employees Earning Above ₹40,000 ---");
    viewEmployees(highEarners);
    mainMenu();
}

function generateReport(callback) {
    console.log("\nGenerating Official Employee Report...");
    setTimeout(() => {
        callback();
    }, 1500);
}

function printReport() {
    generateReport(() => {
        viewEmployees();
        mainMenu();
    });
}

function mainMenu() {
    const choice = prompt(`
1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Find Highest Salary
5. Find Lowest Salary
6. Calculate Total Salary
7. Filter Salary Above ₹40,000
8. Print Employee Report
9. Display Current Date & Time
10. Fetch Employee Data from API
11. Exit
Choose an option (1-11):`);

    switch (choice) {
        case '1':
            viewEmployees();
            mainMenu();
            break;
        case '2':
            searchEmployee();
            break;
        case '3':
            addBonus();
            break;
        case '4':
            findHighestSalary();
            break;
        case '5':
            findLowestSalary();
            break;
        case '6':
            calculateTotalSalary();
            break;
        case '7':
            filterHighSalary();
            break;
        case '8':
            printReport();
            break;
        case '9':
            displayCurrentDateTime();
            mainMenu();
            break;
        case '10':
            fetchEmployeeData();
            break;
        case '11':
            console.log("\nExiting System. Have a great day!\n");
            break;
        default:
            console.log("\nInvalid choice! Please enter a number between 1 and 11.");
            mainMenu();
            break;
    }
}

mainMenu();