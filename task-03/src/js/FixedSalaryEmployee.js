import AbstractEmployee from './AbstractEmployee.js';

export default class FixedSalaryEmployee extends AbstractEmployee {
    constructor(name, salary) {
        super(name)
        this.salary = salary;
    }
    getSalary() {
    return this.salary;
    }
};
