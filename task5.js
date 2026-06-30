//1.Employee Salary Problem//

function getsalary(salary) {
    let monthlySalary = 45000;
    return monthlySalary *12;
}
console.log("Annual Salary: " + getsalary(45000));

//2. Student pass or Fail
function checkPassFail(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }   
}
let studentMarks = prompt("Enter Student Marks:");
console.log("Result: " + checkPassFail(studentMarks));

//3.Food bill

    let burgerPrice = 150;
    let quantity = 3;
    function totalbill(){
    let totalBill = burgerPrice * quantity;
    return totalBill;
}
console.log("Total Bill: " + totalbill());

//4.Welcome employee
function welcomeEmployee(name,department) {
    console.log("Welcome " + name) ;
    console.log("Department: " + department);
}
welcomeEmployee("John", "IT");

//5. online shopping
let productPrice = 5000;
let discount = 500;
function calculateFinalPrice() {
    let finalPrice = productPrice - discount;
    return finalPrice;
}
console.log("Final Price: " + calculateFinalPrice());

//6.company login
function login(callback) {
    console.log("Login Successful!");
    callback();
}
function Dashboard() {
    console.log("Loading Dashboard!");
}
login(Dashboard);

//7.Food delivery 

function DeliveryFood(callback) {

    console.log("Order Received");
    console.log("Preparing Food");
    console.log("Out for Delivery");
    callback();
}
function delivered() {
    console.log("Food Delivered");
}
DeliveryFood(delivered);

//8.luckydraw
function*coupns(){
    yield "10%";
    yield "20%";
    yield "50%";
    return "Better Luck Next Time";
}
let getCoupns = coupns();
console.log(getCoupns.next().value);
console.log(getCoupns.next().value);
console.log(getCoupns.next().value);
console.log(getCoupns.next().value);


//9.Employee Bonus
function bonus (salary){
    return function(bonusAmount){

        console.log("Total Salary:"+(salary+bonusAmount));
    
    };
}
bonus (50000)(5000);

//10.Merge Employee Details
let employeePersonal = {
  name:"jaga",
  age: 22,
  city: "Chennai"
};
let employeeOffice = {
  employeeId: 101,
  department: "Development",
  salary: 50000
};
let employeeDetails = {...employeePersonal,...employeeOffice
};
console.log(employeeDetails);

//.11 shoping cart
let cart1 = ["Laptop", "Mouse", "Keyboard"];
let cart2 = ["Headphones", "Pendrive"];
let shoppingCart = [...cart1, ...cart2];

console.log(shoppingCart);

//12.students mark

function student(name, ...marks) {
  let total = 0;
  for (let mark of marks) {
    total += mark;
  }
  let average = total / marks.length;
  console.log("Student : " + name);
  console.log("Total Marks : " + total);
  console.log("Average : " + average);
}
student("jaga", 90, 85, 88, 95);

//13.Product Details
let product = {
  name: "Laptop",
  price: 65000,
  brand: "Dell",
  stock: 20
};
let { name: productName, price: productPriceValue } = product;
console.log("Name :", productName);
console.log("Price :", productPriceValue);

//14.Customer Details
let customer = [101, "Jaga", "Chennai", 9876543210];
let [id, customerName, city] = customer;
console.log("ID :", id);
console.log("Name :", customerName);
console.log("City :", city);

//15.Add Product
let cart = ["Mobile", "Laptop","jack"];
cart.push("Headphone");
console.log(cart);

//16.Remove Last Product
let cartItems = ["Mobile", "Laptop", "Headphone","jack"];
cartItems.pop();
console.log(cartItems);

//17.Replace Employee
let employeeList = ["Rahul", "Arun", "John", "David"];
employeeList.splice(2, 1, "Naveen");
console.log(employeeList);

//18.Search Product
let products = ["Mouse", "Keyboard", "Monitor", "Laptop"];
let isAvailable = products.includes("Laptop");
console.log("Laptop Available :", isAvailable);

//19.Employee Ranking
let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log(salaries);

//20.reverse chat 
let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log(messages);





//Bonus  task


let employees = [];

// Add Employee
function addEmployee(id, name, salary, bonus) {
  let employee = {
    id,
    name,
    salary,
    bonus
  };

  employees.push(employee);
  console.log("Employee Added Successfully");
}

// View Employees
function viewEmployees() {
  console.log("Employee List:");
  console.table(employees);
}

// Search Employee by ID
function searchEmployeeById(id) {
  let emp = employees.find(employee => employee.id === id);

  if (emp) {
    console.log("Employee Found:", emp);
  } else {
    console.log("Employee Not Found");
  }
}

// Calculate Salary + Bonus
function calculateSalary(id) {
  let emp = employees.find(employee => employee.id === id);

  if (emp) {
    let total = emp.salary + emp.bonus;
    console.log(`${emp.name}'s Total Salary: ${total}`);
  } else {
    console.log("Employee Not Found");
  }
}

// Remove Employee
function removeEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  console.log("Employee Removed Successfully");
}

// Sort Employees by Salary
function sortBySalary() {
  employees.sort((a, b) => a.salary - b.salary);
  console.log("Employees Sorted By Salary");
  console.table(employees);
}

// Find Employee by Name
function findEmployeeByName(name) {
  let emp = employees.find(
    employee => employee.name.toLowerCase() === name.toLowerCase()
  );

  if (emp) {
    console.log("Employee Found:", emp);
  } else {
    console.log("Employee Not Found");
  }
}

// Display Employee Details using Destructuring
function displayEmployee(id) {
  let emp = employees.find(employee => employee.id === id);

  if (emp) {
    let { id, name, salary, bonus } = emp;

    console.log("Employee Details");
    console.log("ID :", id);
    console.log("Name :", name);
    console.log("Salary :", salary);
    console.log("Bonus :", bonus);
  } else {
    console.log("Employee Not Found");
  }
}


addEmployee(101, "Jagadesh", 30000, 5000);
addEmployee(102, "Arun", 45000, 7000);
addEmployee(103, "Karthik", 25000, 3000);

viewEmployees();

searchEmployeeById(102);

calculateSalary(101);

findEmployeeByName("Karthik");

displayEmployee(103);

sortBySalary();

removeEmployee(102);

viewEmployees();