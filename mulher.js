const express = require("express");
const router = express.Router()

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Éllen Franek',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQG237l3mnRnZA/profile-displayphoto-shrink_400_400/0/1675787715719?e=1690416000&v=beta&t=Hh-bxBcoANNt7gJLWeOGpTxowupVQWlges-njgOupbQ',
        minibio: 'Desenvolvedora Web'
    })
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);
