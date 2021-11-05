var FixedSalaryEmployee = require('./FixedSalaryEmployee');
var PerHourSalaryEmployee = require('./PerHourSalaryEmployee');

var EmployeeCollection = function(db) {
    var _this = this;
    this.arr = db;
    this.nArr = new Array();
    this.arr.map(function(el) {
        var obj = (el.type === 'fixed') ? new FixedSalaryEmployee(el.name, Number(el.salary)) : new PerHourSalaryEmployee(el.name, Number(el.salary));
        _this.nArr.push(obj);
        return _this.nArr;
    })
        
    this.nArr.sort(function(current, next) {
        return next.salary - current.salary || next.name - current.name; 
    })
    return this.nArr;
}
// console.log(_this.nArr);
EmployeeCollection.prototype.getCollectionData = function() {
    return this.nArr;
}

EmployeeCollection.prototype.getFiveNames = function() {
    var fiveNames = [];
    this.nArr.forEach(function(el, index) {
        if (index < 5) {
            fiveNames.push(el.name)
        }
    })
    return fiveNames;
}

EmployeeCollection.prototype.getThreeIds = function() {
    var threeId = [];
    this.nArr.forEach(function(el) {
        threeId.push(el.id)
    });
    var getId = threeId.slice(-3);
        return getId;
}

EmployeeCollection.prototype.getCollectionAverage = function() {
    var allSalary = this.nArr.map(function(elem) {
        return elem.salary;
    })
    var averageSalary = allSalary.reduce(function(a, b) {
        (a + b) / allSalary.length;
    })
    return averageSalary;
}

module.exports = EmployeeCollection;
