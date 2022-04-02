import express from "express"
import { fileURLToPath } from "url"
import { dirname } from "path"

const app = express()

// Para utilizar __dirname com o type module
const __dirname = dirname(fileURLToPath(import.meta.url)) 

app.use(express.static('./public'))
app.use(express.static('./public/img'))
// Carrega os arquivos desses diretórios

app.get('/', (req, res) => {
    res.send("Bodia")
})

app.get('/pagina', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
    // envia esse arquivo para o localhost:3000/pagina
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