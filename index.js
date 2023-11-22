const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
