const json = require('./js/employees-collection.json');
import EmployeeCollection from './js/EmployeeCollection.js';
let collection = new EmployeeCollection(json);
let data = JSON.stringify(collection.getCollectionData());
let names = collection.getFiveNames().join(', ');
let ids = collection.getThreeIds().join(', ');
let average = collection.getCollectionAverage().toString();

document.addEventListener("DOMContentLoaded", function(event) {
    let fiveNames = document.querySelector('#five-names');
    let threeId = document.querySelector('#three-ids');
    let collectionAverage = document.querySelector('#collection-average');
    let collectionContent = document.querySelector('#collection-content');
    fiveNames.textContent = ` ${names}`;
    threeId.textContent = ` ${ids}`;
    collectionAverage.textContent = ` ${average}`;
    collectionContent.textContent = `${data}`;
  });