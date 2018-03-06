const connection = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'Books'
    },
    useNullAsDefault: true
});

module.exports = connection;