const Sequelize = require('sequelize');

//arquivo responsavel pra conectar com banco
const connection = new Sequelize(
    'api_livraria_bd_t',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;