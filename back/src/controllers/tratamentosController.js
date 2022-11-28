class Profissional {
    constructor(id, nome, especialidade){
        this.id = id
        this.nome = nome
        this.especialidade = especialidade
    }

    consultas = []

    addComponent(con){
        this.consultas.push(con)
    }
}

class Consulta {
    constructor(id, nome, data, horario){
        this.id = id
        this.nome = nome
        this.data = data
        this.horario = horario
    }

    tratamentos = []

    addComponent(trat){
        this.tratamentos.push(trat)
    }
}

class Tratamento{
    constructor(id, consulta, nome, valor){
        this.id = id
        this.consulta = consulta
        this.nome = nome
        this.valor = valor
    }
}

const Item = require('../models/indexTra');
const con = require('../models/dentistaDAO');

const createTra = (req, res) => {
    con.query(Item.toCreateTratamentos(req.body), (err, result) => {
        if (err == null)
            res.json(req.body).status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readTra = (req, res) => {
    con.query(Item.toReadAllTratamentos(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const readTraProf = (req, res) => {
    con.query(Item.toReadTratamento(req.params), (err, result) => {
        if (err == null){
            let prof = new Profissional(result[0].id_prof, result[0].nome, result[0].especialidade)
            let consultas = []
            result.forEach(r => {
                consultas.push({"id": r.id_consulta, "nome": r.paciente, "data": r.data, "horario": r.horario})
            });
            consultas = Array.from(new Set(consultas.map(a => a.id)))
            .map(id => {
              return consultas.find(a => a.id === id)
            })
            consultas.forEach(c => {
                let con = new Consulta(c.id, c.nome, c.data, c.horario)
                result.forEach(r => {
                    if (c.id == r.id_consulta) {
                        let trat = new Tratamento(r.id_trat, r.id_consulta, r.tratamento, r.valor)
                        con.addComponent(trat)
                    }
                });
                prof.addComponent(con)
            });
            res.json(prof).end()
        }
        else
            res.status(500).json(err).end();
    });
}

const upDateTra = (req, res) => {
    con.query(Item.toUpdateTratamentos(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json(req.body).status(200).end();
            else
                res.json(req.body).status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const deleteTra = (req, res) => {
    con.query(Item.toDeleteTratamentos(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json(req.body).status(204).end();
            else
                res.json(req.body).status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    createTra,
    readTra,
    upDateTra,
    deleteTra,
    readTraProf
}