let employees = [
    { name: "jagadesh", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 }
];

for (let emp of employees) {
    console.log(emp);
    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}



function calculateResult(marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = total / marks.length;

    console.log(`Total Marks: ${total}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);

    if (percentage >= 90) {
        console.log("Grade: A+");
    } else if (percentage >= 80) {
        console.log("Grade: A");
    } else if (percentage >= 70) {
        console.log("Grade: B");
    } else if (percentage >= 60) {
        console.log("Grade: C");
    } else {
        console.log("Grade: Fail");
    }
}

calculateResult([85, 92, 78, 65, 90]);





let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

function calculateBill(cart) {
    let totalBill = 0;
    for (let prod of cart) {
        totalBill += prod.price;
    }

    console.log(`Original Bill: ₹${totalBill}`);

    if (totalBill > 5000) {
        let discount = totalBill * 0.10;
        totalBill -= discount;
        console.log(`10% Discount Applied: -₹${discount}`);
    }

    console.log(`Final Payable Amount: ₹${totalBill}`);
}

calculateBill(products);



let username = "admin";
let password = "12345";

let inputUser = "admin";
let inputPass = "12345";

let status = (inputUser === username && inputPass === password)
    ? "Login Success"
    : "Invalid Credentials";

console.log(status);




function checkSignal(color) {
    switch (color.toLowerCase()) {
        case 'red':
            console.log("Stop");
            break;
        case 'yellow':
            console.log("Ready");
            break;
        case 'green':
            console.log("Go");
            break;
        default:
            console.log("Invalid Signal Color");
    }
}

checkSignal("Red");
checkSignal("Green");



function atmWithdraw(balance, withdrawAmount) {
    console.log(`Current Balance: ₹${balance}`);
    console.log(`Requested Amount: ₹${withdrawAmount}`);

    if (withdrawAmount <= balance) {
        balance -= withdrawAmount;
        console.log("Transaction Success! Please collect your cash.");
        console.log(`Remaining Balance: ₹${balance}`);
    } else {
        console.log("Transaction Failure: Insufficient Balance!");
    }
}

atmWithdraw(10000, 4000);




function placeOrder(callback1, callback2) {
    console.log("Order Received");
    callback1(callback2);
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

placeOrder(prepareFood, deliverFood);




function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    return "Better Luck Next Time";
}

const getOffer = cashbackGenerator();

console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);
console.log(getOffer.next().value);





function checkPatientEligibility(age, weight) {
    if (age > 18) {
        if (weight > 50) {
            console.log("Eligible For Treatment");
        } else {
            console.log("Not Eligible (Weight must be above 50kg)");
        }
    } else {
        console.log("Not Eligible (Age must be above 18)");
    }
}

checkPatientEligibility(25, 60);
checkPatientEligibility(20, 45);






let employeePortal = [
    { id: 101, name: "jagadesh", salary: 30000 },
    { id: 102, name: "John", salary: 60000 }
];

function addEmployee(id, name, salary) {
    employeePortal.push({ id, name, salary });
    console.log(`Employee ${name} added successfully.`);
}

function viewEmployees() {
    console.log("--- Employee List ---");
    employeePortal.forEach(emp => {
        console.log(`ID: ${emp.id} | Name: ${emp.name} | Salary: ₹${emp.salary}`);
    });
}

function processBonus(empId, bonusPercentage, callback) {
    let emp = employeePortal.find(e => e.id === empId);
    if (emp) {
        let bonus = emp.salary * (bonusPercentage / 100);
        callback(emp.name, bonus);
    } else {
        console.log("Employee not found for bonus calculation.");
    }
}

function searchEmployee(id) {
    let emp = employeePortal.find(e => e.id === id);
    if (emp) {
        console.log(`Found: ID: ${emp.id}, Name: ${emp.name}, Salary: ₹${emp.salary}`);
    } else {
        console.log(`Employee with ID ${id} not found.`);
    }
}

function deleteEmployee(id) {
    let initialLength = employeePortal.length;
    employeePortal = employeePortal.filter(e => e.id !== id);
    if (employeePortal.length < initialLength) {
        console.log(`Employee with ID ${id} deleted.`);
    } else {
        console.log(`Employee ID ${id} not found to delete.`);
    }
}

function totalEmployeesCount() {
    console.log(`Total Employees: ${employeePortal.length}`);
}

addEmployee(103, "Anitha", 45000);
viewEmployees();
totalEmployeesCount();

searchEmployee(102);

processBonus(102, 10, (name, bonusAmount) => {
    console.log(`Bonus Notification: ${name} received a bonus of ₹${bonusAmount}`);
});

deleteEmployee(101);
viewEmployees();
totalEmployeesCount();