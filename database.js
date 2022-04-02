import Sequelize from 'sequelize';

// Conexão com banco de dados utilizando sequelize

const sequelize = new Sequelize(
    'test', // Nome da base de dados
    'root', // Nome de usuário
    '',     // Senha
    {
    host: "localhost",  // Host
    dialect: "mysql"    // Qual SGBD estou usando
    }
)

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso")
}).catch( (err) => {
    console.log(`Falha na conexão com o banco de dados: ${err}`)
})

// Criando uma tabela:
const postagem = sequelize.define('postagens', { 
    // Campos da tabela:
    titulo: {
        type: Sequelize.STRING  // Possui um limite de caracteres
    },
    conteudo: {
        type: Sequelize.TEXT    // Não possui
    }
})

// Cria/sincroniza as tabelas
postagem.sync({ force: false }) 
// O force = true garante que a tabela seja criada (Deleta se existe também!)

// Obs.: O sequelize cria também o id, 
// mostra a data de criação do registro e quando foi atualizada pela última vez 

const usuario = sequelize.define('usuarios', 
{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

usuario.sync({ force:false })


// Adiciona um registro na tabela

/*
postagem.create({
    titulo: 'Um título qualquer',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
})

usuario.create({
    nome: 'Thiago',
    sobrenome: 'Pereira Lins da Silva',
    email: 'thiagopls1@hotmail.com',
    idade: 18
})
*/