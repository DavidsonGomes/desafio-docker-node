const express = require('express')
const app = express()
const port = 5000

const mysql = require('mysql')
var config =
{
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    port: 3306,
    ssl: false
};


var list = '<table><thead><tr><th>Id</th><th>Nome</th></tr></thead><tbody>';

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            insertData();
        }
    }
);

function insertData(){

    conn.query(`INSERT INTO people (NAME) VALUES ('Visitante')`, 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Done.');
        })
    conn.query(`SELECT * FROM people;`, 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                let data = results[i];
                console.log('Row: ' + JSON.stringify(data));
                list = list + '<tr>' + '<td>' + data.id + '</td>' + '<td>' + data.name + '</td>' + '</tr>';
            }
            
            list = list + '</tbody></table>';
            console.log('Done.');
        })
    conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
    });

};

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + list)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})