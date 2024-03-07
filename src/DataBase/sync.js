const connection = require('./connection');

//Models
const restaurant = require('../Models/restaurant');
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city'); 

//JSON
const departmentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');


function sync(){
    //Foreign key restaurant - product 
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    });
    console.log("Ingresó");

    //Foreign key department - city 
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    });

    //Foreign key city - restaurant 
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });

    //create json
    departmentjson.createDepartments();
    cityjson.createCities();

}
sync();