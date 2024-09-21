const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const data = require("./data.json");

app.use(cors());

const budget = { 
    myBudget: [
    {
        title: 'Eat Out',
        budget: 30
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Groceries',
        budget: 90
    }
]};

// app.get('/hello', (req, res) => {
//     res.send("Hello World!");
// });

app.get('/budget', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000');
});
