const express = require('express')
const app = express();
const http = require('http');
const webserver = http.createServer(app);
// const path = require('path');
// const sql = require('mssql');
const config = require('./db_config');
// const bodyParser = require('body-parser');
const serverConfig = {
    ip: '10.128.0.8',
    port: '4077'
};



app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'home.html'));
    res.send('<h1> Got the Response ...</h1> ');

});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from backEnd!" });

  });



  

// app.get('/sql-err', (req, res) => {
//     sql.connect(config, (err) => {
//         if (err) console.log(err);
//         var sqlReq = new sql.Request();
//         var query = "DECLARE @errorLogs TABLE (LogID INT, LogDate  DATETIME ,LogSize  BIGINT );INSERT INTO @errorLogs EXEC sys.sp_enumerrorlogs;select LogID,cast(LogDate as varchar) as LogDate ,LogSize/1024 as LogSize from @errorLogs"
//         sqlReq.query(query, (err, output) => {
//             if (err) console.log(err);
//             res.render('home', { filesList: output.recordset});
//             sql.close();
//         });
//     });
// });


webserver.listen(serverConfig.port, (req,res) => {
    console.log(`Server running on ${serverConfig.port}` + '\n');
    console.log(`You can access page via http://${serverConfig.ip}:${serverConfig.port}`);
});
