var fs = require('fs');


function stringToObjectArray(fileString) {
  var rows = fileString.split('\n');

  var popArray = [];

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var rowValues = row.split(',')

    if (rowValues.length < 2) {
      break;
    }

    var populationValue = rowValues[3];
    populationValue = populationValue.replace(/"/g, '');
    populationValue = populationValue * 1000;

    var year = rowValues[1];
    year = year.replace(/"/g, '');

    popArray.push({
      year: year,
      population: populationValue
    });
  }

  return popArray;
}


function parser(filename, callback) {

  function readCompleted(err, fileString) {
    var popArray = stringToObjectArray(fileString);
    callback(popArray);
  }

  var output = fs.readFile(filename, 'utf-8', readCompleted);
}



module.exports = parser;
