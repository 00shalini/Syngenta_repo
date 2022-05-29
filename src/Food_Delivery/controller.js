const pool = require("../../db");

const getRestaurants = (req,res) => {
   pool.query("SELECT * FROM restaurant", (error, results) => {
       if (error) throw  error;
       res.status(200).json(results.rows);
   });
};

module.exports = {
    getRestaurants,
};