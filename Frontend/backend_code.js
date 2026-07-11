// // C:\Users\V rithvik\OneDrive\Desktop\hello\pps practice>
// var name = "Pantarlog"; 
// function greet() { 
// var message = "Hello, " + name; 
// console.log(message); 
// } 
// greet();


//1.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter first number: ", function(a) {

//     rl.question("Enter second number: ", function(b) {

//         a = Number(a);
//         b = Number(b);

//         function big() {

//             if(a > b) {
//                 let ans = "a is big : " + a;
//                 console.log(ans);
//             }
//             else {
//                 let b1 = "b is big : " + b;
//                 console.log(b1);
//             }
//         }

//         big();

//         rl.close();
//     });
// });

//2.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Taking name input
// rl.question("Enter your name: ", function(name) {

//     // Taking age input
//     rl.question("Enter your age: ", function(age) {

//         age = Number(age);

//         function eligible()
//         {
//             if(age >= 18)
//             {
//                 let message = name + " is Eligible to vote!!!";
//                 console.log(message);
//             }
//             else
//             {
//                 let message1 = name + " is Not eligible to vote!!!";
//                 console.log(message1);
//             }
//         }

//         eligible();

//         rl.close();

//     });

//3.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // First number
// rl.question("Enter first number (a): ", function(a) {

//     // Second number
//     rl.question("Enter second number (b): ", function(b) {

//         // Third number
//         rl.question("Enter third number (c): ", function(c) {

//             // Convert string input into numbers
//             a = Number(a);
//             b = Number(b);
//             c = Number(c);

//             function dif_wages()
//             {
//                 // a is biggest
//                 if(a > b && a > c)
//                 {
//                     if(b < c)
//                     {
//                         let dif_wages = a - b;
//                         console.log("Difference =", dif_wages);
//                     }
//                     else
//                     {
//                         let dif_wages = a - c;
//                         console.log("Difference =", dif_wages);
//                     }
//                 }

//                 // b is biggest
//                 else if(b > a && b > c)
//                 {
//                     if(a < c)
//                     {
//                         let dif_wages = b - a;
//                         console.log("Difference =", dif_wages);
//                     }
//                     else
//                     {
//                         let dif_wages = b - c;
//                         console.log("Difference =", dif_wages);
//                     }
//                 }

//                 // c is biggest
//                 else if(c > a && c > b)
//                 {
//                     if(b < a)
//                     {
//                         let dif_wages = c - b;
//                         console.log("Difference =", dif_wages);
//                     }
//                     else
//                     {
//                         let dif_wages = c - a;
//                         console.log("Difference =", dif_wages);
//                     }
//                 }

//                 else
//                 {
//                     console.log("Some numbers are equal");
//                 }
//             }

//             dif_wages();

//             rl.close();

//         });

//     });

// });

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];

rl.on('line', (input) => {
    inputLines.push(input);
});

rl.on('close', () => {

    // First line -> size of array
    let n = Number(inputLines[0]);

    // Second line -> array elements
    let nums = inputLines[1].split(' ').map(Number);

    // Third line -> target
    let target = Number(inputLines[2]);

    // Finding indices using loops
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            if (nums[i] + nums[j] === target) {
                console.log(i, j);
            }
        }
    }
});
// =======================
// VAR EXAMPLES
// =======================

// console.log("VAR EXAMPLES");

// // 1. Redeclaration allowed
// var a = 100;
// var a = 20;

// console.log("Redeclared var a =", a);

// // 2. Reassignment allowed
// a = 300;

// console.log("Reassigned var a =", a);

// // 3. Function scope
// if (true) {
//     var x = 100;
//     console.log("Var inside function : ",x);
// }

// console.log("var x outside block =", x);

// // 4. Hoisting
// console.log("Hoisted var y =", y);

// var y = 50;



// // =======================
// // LET EXAMPLES
// // =======================

// console.log("\nLET EXAMPLES");

// // 1. Redeclaration NOT allowed
// let b = 10;

// // let b = 20; // Error

// console.log("let b =", b);

// // 2. Reassignment allowed
// b = 30;

// console.log("Reassigned let b =", b);

// // 3. Block scope
// if (true) {
//     let z = 200;

//     console.log("let z inside block =", z);
//     z = z+100;
//     console.log("let z inside block value change =", z);
// }

// console.log(z); // Error

// 4. Hoisting
// console.log(m); // Error

// let m = 40;



// // =======================
// // CONST EXAMPLES
// // =======================

// console.log("\nCONST EXAMPLES");

// // 1. Must initialize immediately
// const pi = 3.14;

// console.log("const pi =", pi);

// // 2. Reassignment NOT allowed
// // pi = 4; // Error

// // 3. Redeclaration NOT allowed
// // const pi = 22/7; // Error

// // 4. Block scope
// if (true) {
//     const k = 500;

//     console.log("const k inside block =", k);
// }

// // console.log(k); // Error

// // 5. Array/Object values can change
// const arr = [1, 2];

// arr.push(3);

// console.log("Modified const array =", arr);

// But reassignment not allowed
// arr = [4,5]; // Error