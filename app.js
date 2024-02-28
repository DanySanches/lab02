const express = require('express')
const app = express()

/*para  carregar  servidor(porta) para ver o arquivo no navegador
digitamos http://localhost:8081
vai aparece notGet rota não definida*/ 
//app.listen(8081)

/* vamos criar uma rota  */
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

/* variavel get eu digito antes da url e post em  forms 
req = require ele  envia algo para o navegador
res=  response que  vou  enviar*/
app.get("/", function(req, res){
    res.send("seja bem vindo ao Node js")
})

//criando  outras rotas
app.get("/contato", function(req, res){
    res.send("pagina de contato")
})

// rotas com  parametros
app.get("/cadastrar/:item/:quantidade", function(req, res){
    res.send("pagina de cadastro - Item:" + req.params.item + "- Quantidade: " + req.params.quantidade )
})

