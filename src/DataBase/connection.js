const {Sequelize} = require('sequelize');
var database = 'TIM';
var username = '//el user name de mi postgres';
var password = '//la contraseña de mi postgres';

const connection = new Sequelize(database, username, password,{

    host:'localhost',
    dialect: 'postgres'

});
module.exports = connection;