class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    giveRaise(amount) {
        this.salary += amount;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    giveRaise(amount) {
        super.giveRaise(amount);
        console.log(`New salary for ${this.name} in ${this.department}: ${this.salary}`);
    }
}

// Sample Input
let employee = new Employee("John Doe", 50000);
employee.giveRaise(5000);
console.log(employee.salary); // Output: 55000

let manager = new Manager("Jane Smith", 80000, "Sales");
manager.giveRaise(10000); // Output: New salary for Jane Smith in Sales: 90000
