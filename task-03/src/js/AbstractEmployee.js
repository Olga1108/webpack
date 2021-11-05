let idCount = 1;
export default class AbstractEmployee {
    constructor(name, salary) {
        if (this.constructor === AbstractEmployee) {
            throw new Error("Can't instantiate abstract class!");
        } else if (typeof name === 'string' || typeof salary === 'number') {
            this.id = 'id' + idCount++,
            this.name = name,
            this.salary = salary;
        } else {
            throw new Error("Wrong objects params!");
        }
    }
getSalary() {
    throw new Error("Abstract method!");
    }
}
