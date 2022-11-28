const express = require('express');
const cors = require('cors');

const itens = require('./routes/index');

const app = express();
app.use(express.json());
app.use(cors());
app.use(itens);

app.listen(5000, () => {
    console.log("Porta 5000");
});