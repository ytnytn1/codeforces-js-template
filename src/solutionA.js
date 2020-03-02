'use strict';

function createReadLine() {
  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  let inputString = '';
  let currentLine = 0;

  process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
  });

  process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
      return string.trim();
    });

    main();
  });

  function readline() {
    return inputString[currentLine++];
  }

  return readline;
}

const readline = createReadLine();

function readInts(){
  return readline().split(' ').map((value => Number.parseInt(value)));
}

function readFloats(){
  return readline().split(' ').map((value => Number.parseFloat(value)));
}


function readInt(){
  return Number.parseInt(readline());
}

function readFloat(){
  return Number.parseFloat(readline());
}

function main() {
  const int = readInt();
  const result = solve(int);
  console.log(result);
}


function solve(int){
  // here should be your code to solve task
  return int * 2;
}

module.exports.solve = solve;
