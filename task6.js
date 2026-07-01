
let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];
//1.Highest salary
let high = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max), employees[0]);

console.log("Highest Salary : " + high.salary);
console.log("Employee Name : " + high.name);

//2.Find Employee by id
let searchId = 103;
let foundEmployee = employees.find(emp => emp.id === searchId);

if (foundEmployee) {
    console.log("Employee Found");
    console.log("Name : " + foundEmployee.name);
    console.log("Salary : " + foundEmployee.salary);
} else {
    console.log("Employee Not Found");
}

//3.Calculate Salary with Bonus
let bonus = 5000;

employees.forEach(emp => {
    console.log(emp.name + " : " + (emp.salary + bonus));
});

//4.Employee Experience Check
let expEmployees = [
    { name: "Naveen", exp: 2 },
    { name: "John", exp: 7 },
    { name: "Arun", exp: 5 }
];
expEmployees.forEach(emp => {
    let role = emp.exp >= 5 ? "Senior Employee" : "Junior Employee";
    console.log( emp.name + " - " + role);
});

//5.Display Emp Names
employees.forEach(emp => {
    console.log(emp.name);
});

//6. Display Emp Id
employees.forEach(emp => {
    console.log(emp.id);
});

//7.Find Total Salary
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

//8. Emp earnings more
employees
    .filter(emp => emp.salary > 40000)
    .forEach(emp => console.log(emp.name));

//9.Increase Salary
    employees.forEach(emp => {
    emp.salary += 5000;
    console.log(emp.name + " : " + emp.salary);
});

//10. Emp Report
employees.forEach(emp => {
    console.log("Employee Name :"+ emp.name);
    console.log("Employee ID : " + emp.id);
    console.log("Salary : " + emp.salary);
});


///Bonus Task

const bonusEmployees = [
  { name: "Naveen", id: 101, salary: 30000 },
  { name: "John", id: 102, salary: 60000 },
  { name: "Arun", id: 103, salary: 45000 }
];

// 1.Total Emp
let totalEmployees = bonusEmployees.length;

// 2.high salary
let highestSalary = Math.max(...bonusEmployees.map(emp => emp.salary));

// 3. Low salary
let lowestSalary = Math.min(...bonusEmployees.map(emp => emp.salary));

// 4. Total salary of all emp
let bonusTotalSalary = bonusEmployees.reduce((sum, emp) => sum + emp.salary, 0);

// 5. Employee earning the highest salary
let highestPaidEmployee = bonusEmployees.find(emp => emp.salary === highestSalary);

// 6. Employee earning the lowest salary
let lowestPaidEmployee = bonusEmployees.find(emp => emp.salary === lowestSalary);

// 7. Employees  salary is greater than ₹40,000
let highEarners = bonusEmployees.filter(emp => emp.salary > 40000);

// 8. Search an employee by ID 
let bonusSearchId = 103;
let searchedEmployee = bonusEmployees.find(emp => emp.id === bonusSearchId);

// 9. Add ₹5,000 bonus to employee and display new salary
let employeesWithBonus = bonusEmployees.map(emp => ({...emp,
  salary: emp.salary + 5000
}));

// 10. Print a professional employee report using template literals
const report = `
Total Employees  : ${totalEmployees}
Total Payroll    : ${bonusTotalSalary.toLocaleString('en-IN')}
Highest Salary   : ${highestSalary.toLocaleString('en-IN')} (${highestPaidEmployee.name})
Lowest Salary    : ${lowestSalary.toLocaleString('en-IN')} (${lowestPaidEmployee.name})


${highEarners.map(emp => ` • ${emp.name} (₹${emp.salary.toLocaleString('en-IN')})`).join('\n')}

${searchedEmployee ? `  Found: ${searchedEmployee.name} | Salary: ₹${searchedEmployee.salary.toLocaleString('en-IN')}` : ' • Employee not found.'}

${employeesWithBonus.map(emp => `  ${emp.id} ${emp.name.padEnd(8)} : ${emp.salary.toLocaleString('en-IN')}`).join('\n')}
`;

console.log(report);
