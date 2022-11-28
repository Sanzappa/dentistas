class Profissional {

	constructor(id, nome, especialidade) {
        this.id = id
		this.nome = nome
        this.especialidade = especialidade
	}

	consultas = [];

	addComponent(com) {
		this.consultas.push(com);
	}
}