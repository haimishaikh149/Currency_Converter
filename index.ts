import inquirer from "inquirer"

const currency: any ={
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: 'enter from currency',
            type: 'list',
            choices: ['USD','EUR','GBR','INR','PKR']
        },
        {
            name:'to',
            message: 'enter from currency',
            type: 'list',
            choices: ['USD','EUR','GBR','INR','PKR']
        },
        {
            name: 'amount',
            message: 'enter from amount',
            type: 'number'
            
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount // USD base currency // 4
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);