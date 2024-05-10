#! /usr/bin/env node
console.log("\n\tWelcome to \'code with Ali Bakhsh\'-simpal ATM\n");
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 12345;
let answer = await inquirer.prompt([
    {
        name: "pin",
        message: "enper your pin",
        type: "number",
    }
]);
if (answer.pin === mypin) {
    console.log("your pin is correct");
    let oprationans = await inquirer.prompt([
        {
            name: "opration",
            message: "select option",
            type: "list",
            choices: ["withdraw", "chack your balance"],
        }
    ]);
    console.log(oprationans);
    if (oprationans.opration === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        mybalance -= amountans.amount;
        console.log("your remaining balance is:" + mybalance);
    }
    else if (oprationans.opration === "chack your balance") {
        console.log("your balance is:" + mybalance);
    }
}
else {
    console.log("incorrect pin code");
}
