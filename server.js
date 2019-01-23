const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (req, res) => {
    const customers = [{
            id: 1,
            name: "john",
            surname: "bage"
        },
        {
            id: 2,
            name: "david",
            surname: "huge"
        },
        {
            id: 3,
            name: "elon",
            surname: "hawk"
        }
    ];
    res.json(customers);
});

app.listen(port, () => {
    console.log(`The server is running on ${port} port`);
});

const customer = function getCustomers() {
    return customers;
}

module.exports = customer;