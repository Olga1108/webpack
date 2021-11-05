var idCount = 1;
var AbstractEmployee = function(name, salary) {
    if (this.constructor === AbstractEmployee) {
        throw new Error("Can't instantiate abstract class!");
    } else if (typeof name !== 'string'
    || typeof salary !== 'number') {
        throw new Error("Wrong objects params!");
    } else {
        this.id = 'id' + idCount++;
        this.name = name;
        this.salary = salary;
    }
};

AbstractEmployee.prototype.getSalary = function() {
    throw new Error("Abstract method!");
}

module.exports = AbstractEmployee;