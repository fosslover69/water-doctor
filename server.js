const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let postedValues = {};

app.post('/post-values', (req, res) => {
    const { value1, value2 } = req.body;
    
    postedValues = {
        value1,
        value2
    };
    console.log(req.body)
    res.send('Values received and stored successfully!');
});

// Endpoint to display the posted values
app.get('/display-values', (req, res) => {
    res.json(postedValues);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
  });
