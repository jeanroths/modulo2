const express = require('express'); 
const app = express();

const hostname = 'localhost';
const port = 3010;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'dbCV.db'; 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("../frontCV/"));

/* Definição dos endpoints */

// Retorna todos registros (é o R do CRUD - Read)
app.get('/useredit', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
  
    var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM Currículo ORDER BY title COLLATE NOCASE';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  