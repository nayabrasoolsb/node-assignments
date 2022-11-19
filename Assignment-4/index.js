const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000

// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', "./views")
// app.use(bodyParser.json())
// your code goes here

app.get('/', (req, res) => {
    res.render('form.ejs')
})
app.post("/math", (req, res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    let body = req.body.submit;
    let symbol;
    let definition;
    switch (body) {
        case "add":
            symbol = "+";
            definition = "sum"
            break;
        case "sub":
            symbol = "-";
            definition = "difference"
            break;
        case "div":
            symbol = "/";
            definition = "division"
            break;
        case "mul":
            symbol = "*";
            definition = "product"
            break;
        default:
            symbol = "";
    }
    if (num1 >= 0 && num2 == 0 && body == "div") {
        res.status(200).send({ status: 'error', messege: "cannot divide with zero" });
    } else if (num1 >= 0 && num2 >= 0) {
        let result = eval(num1 + symbol + num2)
        if (result > 1e6) {
            res.status(200).send({ status: 'error', messege: "Overflow" });
        } else if (result < -1e6) {
            res.status(200).send({ status: 'error', messege: "Underflow" });
        } else {
            res.status(200).send({ status: 'success', messege: `the ${definition} of two numbers is ${result}`, result });
        }
    } else {
        res.status(200).send({ status: 'error', messege: "invalid data types" });
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;