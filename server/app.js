const express = require('express');
const app = express();
const port = 3009;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const route = require('./routes');
app.use(route)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});