const express = require("express");
const router = express.Router()


const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Éllen Franek',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQG237l3mnRnZA/profile-displayphoto-shrink_400_400/0/1675787715719?e=1690416000&v=beta&t=Hh-bxBcoANNt7gJLWeOGpTxowupVQWlges-njgOupbQ',
        minibio: 'Desenvolvedora Web'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta);
}


app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);
