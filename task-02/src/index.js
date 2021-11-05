var json = require('./js/employees-collection.json');
var EmployeeCollection = require('./js/EmployeeCollection');
var collection = new EmployeeCollection(json);
var arrayCollection = collection.getCollectionData();
var data = JSON.stringify(arrayCollection);
var names = collection.getFiveNames().join(', ');
var ids = collection.getThreeIds().join(', ');
var average = collection.getCollectionAverage().toString();

document.addEventListener("DOMContentLoaded", function(event) {
    var fiveNames = document.querySelector('#five-names');
    var threeId = document.querySelector('#three-ids');
    var collectionAverage = document.querySelector('#collection-average');
    var collectionContent = document.querySelector('#collection-content');
    fiveNames.textContent = ` ${names}`;
    threeId.textContent = ` ${ids}`;
    collectionAverage.textContent = ` ${average}`;
    collectionContent.textContent = `${data}`;
  });