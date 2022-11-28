const toCreateTratamentos = (model) => {
    return `INSERT INTO tratamentos VALUES (default, ${model.consulta}, '${model.tratamento}', ${model.valor})`;
}

const toReadAllTratamentos = () => {
    return "SELECT * FROM tratamentos";
}

const toReadTratamento = (model) => {
    return `SELECT * FROM vw_tratamentos WHERE id_prof = ${model.id}`;
}


const toUpdateTratamentos = (model) => {
    return `UPDATE tratamentos SET tratamento = '${model.tratamento}', valor = ${model.valor} WHERE id = ${model.id}`;
}

const toDeleteTratamentos = (model) => {
    return `DELETE FROM tratamentos WHERE id = ${model.id}`;
}

module.exports = {
    toCreateTratamentos,
    toReadAllTratamentos,
    toUpdateTratamentos,
    toDeleteTratamentos,
    toReadTratamento
}