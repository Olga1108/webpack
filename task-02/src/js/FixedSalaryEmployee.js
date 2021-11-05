var AbstractEmployee = require('./AbstractEmployee');

var FixedSalaryEmployee = function(name, salary) {
    AbstractEmployee.apply(this, arguments);
    this.salary = salary;
};
FixedSalaryEmployee.prototype = Object.create(AbstractEmployee.prototype);
FixedSalaryEmployee.prototype.constructor = FixedSalaryEmployee;

FixedSalaryEmployee.prototype.getSalary = function() {
    return this.salary;
}

module.exports = FixedSalaryEmployee;