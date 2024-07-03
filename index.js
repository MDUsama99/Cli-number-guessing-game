#! usr/bin/env node
import inquirer from "inquirer";
//  //computer will generate a random number -Done
//  //User Input for Guessing number
//  //compare User Input and computer generated number and show the result
const randonNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randonNumber) {
    console.log("Congratulation! YOU GUESSED RIGHT NUMBER.");
}
else {
    console.log("You guessed a wrong number.");
}
