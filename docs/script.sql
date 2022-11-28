drop database if exists dentista;
create database dentista charset=utf8 collate utf8_general_ci;
use dentista;

create table profissionais(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    especialidade varchar(30)
);

create table consultas(
    id integer not null primary key auto_increment,
    paciente varchar(50) not null,
    data varchar(10) not null,
    horario varchar(5) not null,
    profissional integer not null,
    foreign key (profissional) references profissionais(id)
);

create table tratamentos(
    id integer not null auto_increment primary key,
    consulta integer not null,
    tratamento varchar(30),
    valor float(6,2) not null,
    foreign key (consulta) references consultas(id)
);

create view vw_tratamentos as
select p.id as id_prof, p.nome, p.especialidade, c.id as id_consulta, c.paciente, c.data, c.horario, t.id as id_trat , t.tratamento, t.valor
from consultas c inner join tratamentos t on c.id = t.consulta
inner join profissionais p on p.id = c.profissional;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/dentistas/docs/profissionais.csv'
INTO TABLE profissionais
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/dentistas/docs/consultas.csv'
INTO TABLE consultas
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/dentistas/docs/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;