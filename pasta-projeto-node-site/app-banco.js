var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "siterpg.database.windows.net",
        user: "cero",
        password: "oscuras#4",
        database: "siterpg",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "BASETESTE.database.windows.net",
        user: "usuariotestes",
        password: "senhatestes",
        database: "BASETESTE",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
