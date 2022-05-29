const  Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database:"food_delivery",
    password:"Shalini@0706",
    port: 5433
});

module.exports = pool;