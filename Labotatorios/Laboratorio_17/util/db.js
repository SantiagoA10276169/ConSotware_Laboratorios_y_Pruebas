const mysql = require('mysql2');

const pool = mysql.createPool({

    host: 'localhost',

    user: 'root',

    database: 'skills_bank',

    password: '',

});

module.exports = pool.promise();