var fs = require('fs');

var output = fs.readFileSync('cambodian-population-un.csv', 'utf-8');

var rows = output.split('\n');
console.log('length', rows);

var sum = 0;
for (var i = 1; i < rows.length; i++) {
  console.log('row', rows[i]);
  var row = rows[i];
  var rowValues = row.split(',')

  if (rowValues.length < 2) {
    break;
  }

  var val = rowValues[3];

  console.log('val', i, val);
  val = val.replace('"', '');
  val = val.replace('"', '');

  sum += Number(val);
}

console.log('sum', sum, sum / rows.length - 2);
