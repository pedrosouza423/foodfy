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
//Página HOME
server.get("/", function(req,res){
    const home = {
        text: 'Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.',
        best_recips: 'As melhores receitas',
        most_accessed: 'Mais acessadas'
    }
    return res.render('index', {receitas,home} )
})

//Página de receitas
server.get("/receitas", function(req,res){
    return res.render('receitas', {receitas})
})

//Página sobre
server.get("/sobre", function(req,res){
    const about = {
        about: 'Sobre o Foodfy',
        text1: 'Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.',
        text2: 'Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.',
        beginning:'Como tudo começou…',
        recips:'Nossas receitas'
    }

    return res.render('sobre', {about})
})

/* Página individual de cada receita */
server.get("/receitas/:index", function (req, res) {
    const receitasIndex = req.params.index
  
    const receita = receitas[receitasIndex]
    
    if(!receita){
        return res.send('Essa receita não existe')
    }
    return res.render('receita',{receita})
})

server.listen(5000, function(){
    console.log('server is running')
})