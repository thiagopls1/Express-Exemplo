import express from "express"

const app = express()

// Mostra para o express utilizar esse diretório para enviar arquivos estáticos
app.use(express.static('./')) 

app.get('/', (req, res) => {
    res.send("Bodia")
})

app.get('/pagina', (req, res) =>{
    res.sendFile("index.html")
    // envia esse arquivo para o localhost:3000/pag-da-gigi
})

app.get('/sobre', (req, res) => {
    res.send("Sobre")
    // envia essa mensagem para o localhost:3000/sobre
})

// O ':' cria um parâmetro
// É só colocar o nome na url :D
app.get('/ola/:nome/:cor', (req, res) => {

    res.send(`
    <h1>Olá ${req.params.nome}</h1>
    <h1>Sua cor favorita é: ${req.params.cor}</h1>
    `)

    // obs.: só é possível utilizar um send por rota
    // outra obs.: é melhor enviar um arquivo html
})

app.listen(3000, () => {
    console.log(`Server is running at port 3000`)
})
// Depois do listen não pode ter mais comandos!