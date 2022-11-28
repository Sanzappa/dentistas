const Item = require('../models/indexCon');
const con = require('../models/dentistaDAO');

const readCon = (req, res) => {
    con.query(Item.toReadAllConsultas(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    readCon
}