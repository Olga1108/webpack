import FixedSalaryEmployee from './FixedSalaryEmployee.js';
import PerHourSalaryEmployee from './PerHourSalaryEmployee.js';
export default class EmployeeCollection {
    constructor(db) {
        this.arr = db;
        this.nArr = [];
        this.arr.map(el => {
            let obj = (el.type === 'fixed') ? new FixedSalaryEmployee(el.name, Number(el.salary)) : new PerHourSalaryEmployee(el.name, +el.salary);
            this.nArr.push(obj);
            return this.nArr;
        })
      
    this.nArr.sort((current, next) => {
        return next.salary - current.salary || next.name - current.name; 
        })
     }
    
    getCollectionData() {
        return this.nArr;
    }

    getFiveNames() {
        let fiveNames = [];
        this.nArr.forEach((el, index) => {
            if (index < 5) {
                fiveNames.push(el.name)
            }
        })
        return fiveNames;
    }

    getThreeIds() {
        let threeId = [];
        this.nArr.forEach((el) => {
            threeId.push(el.id)
        });
        let getId = threeId.slice(-3);
        return getId;
    }

    getCollectionAverage() {
        let allSalary = this.nArr.map((elem) => elem.salary)
        let averageSalary = allSalary.reduce((a, b) => (a + b)) / allSalary.length;
        return averageSalary;
    }

}
