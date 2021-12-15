class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);

const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);

for (let employee of [craig, arvinder, angela, phil]) {
  ada.addSubordinate(employee);
}

console.log(ada.numberOfSubordinates);
console.log(angela.numberOfPeopleToCEO);
console.log(craig.boss === phil.boss);
console.log(craig.hasSameBoss(phil));