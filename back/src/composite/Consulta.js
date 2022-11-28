export class Consulta {

	constructor(id, nome, data, horario, profissional) {
		this.id = id
		this.nome = nome
        this.data = data
        this.horario = horario
        this.profissional = profissional
	}

    tratamentos = [];

	addComponent(trat) {
		this.tratamentos.push(trat);
	}
}