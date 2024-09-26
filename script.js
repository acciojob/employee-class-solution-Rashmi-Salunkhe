// Employee class
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.giveRaise = function(amount) {
  this.salary += amount;
}

// Manager class (extends Employee)
function Manager(name, salary, department) {
  // Call the Employee constructor to initialize name and salary
  Employee.call(this, name, salary);
  this.department = department;
}

// Inherit from Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Override giveRaise for Manager
Manager.prototype.giveRaise = function(amount) {
  // Call the parent class's giveRaise method
  Employee.prototype.giveRaise.call(this, amount);
  // Log department and new salary
  console.log(`New salary for ${this.name} in ${this.department}: ${this.salary}`);
}

// Sample Input and Output
let employee = new Employee("John Doe", 50000);
employee.giveRaise(5000);
console.log(employee.salary); // 55000

let manager = new Manager("Jane Smith", 80000, "Sales");
manager.giveRaise(10000); // New salary for Jane Smith in Sales: 90000
