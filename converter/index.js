var csv = require('csv');
var fs = require('fs');
var through = require('through2');
var _ = require('highland');
var JSONStream = JSONStream = require('JSONStream');

// Read in csv
// For each row write a source, target, amount for each year
// Write each year out to a file

var b2011 = 'b2011.json';
var b2012 = 'b2012.json';
var b2013 = 'b2013.json';
var b2014 = 'b2014.json';
var b2015 = 'b2015.json';

var parser = csv.parse({columns: true});

_(fs.createReadStream('budget.csv')
  .pipe(parser))
  .map(function(record){
    var source = record['Fund'];
    var target = record['Department'];
    var department = {
      source: source,
      target: target,
      value: Math.round(record['2011'])
    }

    var source = record['Department'];
    var target = record['Agency'];
    var agency = {
      source: source,
      target: target,
      value: Math.round(record['2011'])
    };
    return [department, agency];
  })
  .flatten()
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream('b2011.json'));
