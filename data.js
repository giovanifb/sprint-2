var db = null;
var populate = 
[
    {
        "table": "user",
        "id": 1,
        "username": "user1",
        "password": "123",
        "nome": "usuario 01",
        "email": "usuario1@gmail.com",
        "telefone": "71989765423"
    },
    {
        "table": "user",
        "id": 2,
        "username": "user2",
        "password": "123",
        "nome": "usuario 02",
        "email": "usuario2@gmail.com",
        "telefone": "71989765423"
    },
    {
        "table": "user",
        "id": 3,
        "username": "user3",
        "password": "123",
        "nome": "usuario 03",
        "email": "usuario3@gmail.com",
        "telefone": "71989765423"
    }
]
function createDatabase()
{
    try
    {
        db = openDatabase("PBE-db", "1.0", "Database for PBE application", 200000);
        if(!db)
            throw "Não foi possível Criar o Banco de Dados";
    }catch(exp)
    {
        alert(exp);
    }
}

function createTables()
{
    db.transaction(function(transaction)
    {
        db.transaction.executeSql("CREATE TABLE user (id REAL UNIQUE, username TEXT, password TEXT, nome TEXT, email TEXT, telefone TEXT)");
    });
}

function populateTable()
{
   for(let item of populate)
   {
       if(item.table = "user")
       {
           console.log(`INSERT INTO user (id, username, password, nome, email, telefone) values("${item.id}", "${item.username}","${item.password}", "${item.nome}", "${item.email}", "${item.telefone}")`)
            db.transaction(function(transaction)
            {
                transaction.executeSql(`INSERT INTO user (id, username, password, nome, email, telefone) values("${item.id}", "${item.username}","${item.password}", "${item.nome}", "${item.email}", "${item.telefone}")`);
            });
       }
   }
}

function login()
{
    let frm = document.forms["form-login"];
    db.transaction(function(transaction)
    {
        transaction.executeSql(`SELECT password FROM user where username = "${frm.elements.inputUsuario.value}"`,
        function(transaction, result)
        {
            console.log('deu certo!');
            console.log(result);
        },
        function(transaction, error)
        {
            console.log(error);
        });
    });
}

createDatabase()
createTables()
populateTable()
console.log(db)