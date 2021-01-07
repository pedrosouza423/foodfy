const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

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
    return res.render('index')
})

server.get("/receitas", function(req,res){
    return res.render('receitas')
})

server.get("/sobre", function(req,res){
    return res.render('sobre')
})

server.listen(5000, function(){
    console.log('server is running')
})