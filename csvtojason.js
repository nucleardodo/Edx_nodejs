//CSV to JSON converter using NPM package csvtojson
//Author: Pranav Vyas
//For Edx course Introduction to NodeJs Microsoft: DEV283x
//Assignment 1

const http = require('http')
const fs = require ('fs')
const path = require ('path')
const csvtojson = require('csvtojson')
const util = require('util')

var log_file = fs.createWriteStream(__dirname + '/customer-data.json', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { 
    log_file.write(util.format(d) + '\n');
    log_stdout.write(util.format(d) + '\n');
  };

const csvfilepath = path.join(__dirname +'customer-data.csv')
csvtojson()
    .fromFile(csvfilepath)
    .then (function (jsonobj){
        console.log(jsonobj); //overriding the console.log function to give output in a file instead of on screen.
    })
    
