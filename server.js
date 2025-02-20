const express = require("express")

// trabalha com caminhos de arquivos e diretorios
const path = require("path")

const server = express();

//configurando express para entregar arquivos estaticos
//  e publicos da aplicação(css, script.js)
server.use(express.static("public"));

// .get("rota", função)
server.get("/", function (req, res) {
    console.log("Recebi o pedido do front!!!!");
    return res.sendFile(path.join(__dirname + "/index.html"));
});

// Rota para a página de projetos
server.get("/projects", function (req, res) {
    console.log("Recebi o pedido da página de projetos!");
    return res.sendFile(path.join(__dirname, "projects.html"));
});

//path.join() constroi caminhos de arquivos de forma segura 
// e compativel com diferentes sistemas



// metodo .listen() liga o servidor
server.listen(3000)


// npm install express > instala os codigos de servidor web