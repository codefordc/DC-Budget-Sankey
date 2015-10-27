var csv = require('csv');
var fs = require('fs');
var through = require('through2');
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

fs.createReadStream('budget.csv')
  .pipe(parser)
  .pipe(through.obj(function(record, enc, callback){
    var source = record['Fund'];
    var target = record['Agency'];
    var value = {
      source: source,
      target: target,
      value: record['2015']
    }
    this.push(value);
    callback();
  }))
  .pipe(JSONStream.stringify())
  .pipe(fs.createWriteStream('b2015.json'))
  //.pipe(process.stdout)
  .on('error', function(err){
    console.log(err);
  })
  .on('end', function(){
    console.log('DONE');
  });
  // .pipe(csv.transform(function(record){
  //
  //   return record;
  // }))
