import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'movies_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos: ', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = connection;