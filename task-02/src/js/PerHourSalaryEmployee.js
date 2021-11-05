var AbstractEmployee = require('./AbstractEmployee');

var PerHourSalaryEmployee = function(name, salary) {
    AbstractEmployee.apply(this, arguments);
    this.salary = Math.round(salary * 20.88 * 8);
};
PerHourSalaryEmployee.prototype = Object.create(PerHourSalaryEmployee.prototype);
PerHourSalaryEmployee.prototype.constructor = PerHourSalaryEmployee;

PerHourSalaryEmployee.prototype.getSalary = function() {
    return this.salary;
}

module.exports = PerHourSalaryEmployee;