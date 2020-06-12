// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// iniciar o objeto que ira fazer operações de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// ultilizar o obj de bd para operações de banco 
// db.serialize(() =>{
//     //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     //inserir dados
//     const query = `
//     INSERT INTO places (
//         image ,
//         name ,
//         address ,
//         address2 ,
//         state ,
//         city ,
//         items 
//     ) VALUES (
//         ?, ?, ?, ?, ?, ?, ?);`

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         "Paperside",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, Lampadas"
//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData)
       
//     //Consultar dados
//     db.all(`SELECT * FROM places`, function(err , rows){
//         if(err){
//             return console.log(err)
//         }
       
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

    // Deletar
    // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
       
    //     console.log("Registro deletado com sucesso")
    // })


// })