const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is the input text? ', (string) => {
  const result = string.toString();
  const toPrint = `${result} has ${result.length} characters.`
  console.log(toPrint);
  rl.close();
});

// Takes three inputs
// rl.question('Enter the first number : ', (answer1) => {
//   rl.question('Enter the second number : ', (answer2) => {
//     rl.question('Enter the third number : ', (answer3) => {
//       const sum = +answer1 + +answer2 + +answer3;
//       console.log(`The sum is ${sum}`);
//       rl.close();
//     });
//   });
// });
