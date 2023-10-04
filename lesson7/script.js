// function sum(a,b){
//     return a + b
// }
//
// console.log(sum(1,3));
//
// const summ = () => {
//     return 'hello'
// }
// console.log(summ)
//
// let employee = {
//     name: 'Oleksii',
//     age: 25,
//     details: function() {
//         return 'hello ' + this.name;
//     }
// }
// console.log(employee.details())
// employee.name = 'Ihor';
// console.log(employee.details());


let clients = [
    {
        name: 'Bogdan',
        balance: 25,
        history: []
    },
    {
        name: 'Oleksii',
        balance: 100,
        history: []
    },
    {
        name: 'Ihor',
        balance: 1000,
        history: []
    }
];

function createClient(name, balance) {
    let client = { name: name, balance: balance, history: [] };
    clients.push(client);
    return client;
}

function getBalance(client) {
    console.log(client.balance);
    client.history.push(`Check balance: ${client.balance}`);
}

function sendMoney(sender, amount, recipient) {
    if (sender.balance < amount) {
        console.log("недостатньо коштів.");
        return;
    }

    sender.balance -= amount;
    recipient.balance += amount;

    sender.balance -= amount * 0.1;

    sender.history.push(`Sent ${amount} to ${recipient.name}`);
    recipient.history.push(`Received ${amount} from ${sender.name}`);

    return {
        sender: sender,
        recipient: recipient
    };
}

function withdraw(client, amount) {
    if (client.balance < amount) {
        console.log("недостатньо коштів.");
        return;
    }

    client.balance -= amount + amount * 0.05;
    client.history.push(`Withdrawn ${amount}`);
    console.log(client.balance);
}

// createClient('John', 500);

// console.log(newClient);
sendMoney(clients[0], 5, clients[1]);
// getBalance(clients[0]);
// withdraw(clients[0], 20);

console.log(clients);


