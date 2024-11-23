class Employee {
  // Static private field
  static #companyName = "Tech Innovations Inc.";

  // Static public field
  static totalEmployees = 0;

  // Instance public field
  department = "Unassigned";

  // Instance private field
  #salary;

  // Constructor
  constructor(name, initialSalary) {
    this.name = name;
    this.#salary = initialSalary;
    Employee.totalEmployees++;
  }

  // Static public method
  static getCompanyName() {
    return this.#companyName; // Note: can access static private field
  }

  // Instance public method
  introduce() {
    return `Hi, I'm ${this.name} from ${this.department}`;
  }

  // Instance private method
  #calculateAnnualBonus() {
    return this.#salary * 0.1;
  }

  // Instance public getter
  get salaryInfo() {
    return `Salary: $${this.#salary}`;
  }

  // Instance public setter
  set salaryInfo(newSalary) {
    if (newSalary > 0) {
      this.#salary = newSalary;
    }
  }

  // Static private method
  static #generateEmployeeId() {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Demonstration
const employee1 = new Employee("Alice", 75000);
employee1.department = "Engineering";

console.log(employee1.introduce()); // Public instance method
console.log(employee1.salaryInfo); // Public getter
console.log(Employee.totalEmployees); // Static public field
console.log(Employee.getCompanyName()); // Static public method

// This would cause errors:
// console.log(employee1.#salary); // Cannot access private field
// console.log(Employee.#companyName); // Cannot access private static field

// conflicts are happenning when 2 different branches changed and commit the same line
