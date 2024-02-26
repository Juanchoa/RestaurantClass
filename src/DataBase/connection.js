const {Sequelize} = require('sequelize');
var database = 'TIM';
var username = 'postgres';
var password = 'Televicion1?';

const connection = new Sequelize(database, username, password,{

    host:'localhost',
    dialect: 'postgres'

});
module.exports = connection;