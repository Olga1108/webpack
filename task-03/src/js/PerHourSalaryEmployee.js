import  AbstractEmployee  from './AbstractEmployee.js';

export default class PerHourSalaryEmployee extends AbstractEmployee {
    constructor(name, salary) {
        super(name)
        this.salary = Math.round(salary * 20.88 * 8);
    }
    getSalary() {
    return this.salary;
    }
};
