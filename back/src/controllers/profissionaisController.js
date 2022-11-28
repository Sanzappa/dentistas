const Item = require('../models/indexPro');
const con = require('../models/dentistaDAO');

const readPro = (req, res) => {
    con.query(Item.toReadAllProfissionais(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}



module.exports = {
    readPro
}