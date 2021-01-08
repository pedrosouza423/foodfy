const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Importando o data
const receitas = require('./data')

//Utilizando parte estática da página
server.use(express.static('public'))

//Setando view engine
server.set("view engine","njk")

nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache: true
})

//Rotas do servidor
server.get("/", function(req,res){
    return res.render('index', {receitas} )
})

server.get("/receitas", function(req,res){
    return res.render('receitas', {receitas})
})

server.get("/sobre", function(req,res){
    return res.render('sobre')
})

/* Página individual de cada receita */
server.get("/receitas/:id", function(req,res){
    const id = req.params.id

    return res.send(id)

})

server.listen(5000, function(){
    console.log('server is running')
})