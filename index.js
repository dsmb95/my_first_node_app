// Import statements should be at the top of the code.
import fs from 'fs';
import os from 'os';
import chalk from 'chalk';
import figlet from 'figlet';
import {add, multiply} from './math.js';

// Uses the fs module
fs.writeFileSync('message.txt', 'Hello from Node.js (ESM)!');
const data = fs.readFileSync('message.txt', 'utf8');
console.log('File contents:', data);

// Uses the os module
console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

// Uses the third party chalk module.
console.log(chalk.red("Hello World"));
console.log(chalk.green.bold("Hello World"));
console.log(chalk.blue.underline("Hello World"));

// Uses the third party figlet module.
// This program uses an error-first callback function to catch errors. 
figlet('Node is awesome!', (err, data) => { 
    if (err) { 
        console.log('Something went wrong...'); 
        return; 
    }
    console.log(data); 
});

console.log("The sum is ", add(95, 25));
console.log("The product is ", multiply(95, 25));
/* UTF-8: encoding system that uses 8 binary digits (computer language: a bunch of 0s and 1s) to represent an alphabet. */