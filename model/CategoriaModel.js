const Sequelize = require('sequelize');

const connection = require('../database/database');

//arquivo responsavel pra descrever as tabelas

const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_categoria:{
        type: Sequelize.STRING,
        allowNull: false
        }
    }
);

//sync sincroniza a model com o banco,se a tabela nao existir o banco ira criar.
Categoria.sync({force:false});

module.exports = Categoria;