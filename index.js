const express = require("express");
const app = express();

//Estou pedindo para o express usar o EJS como view engine
app.set("view engine", "ejs");	

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;
    res.render("index", {
       nome: nome,
       lang: lang,
       empresa: "DevPleno",
       inscritos: 8000,
       msg: exibirMsg
    });
});

app.listen(8080, () => {console.log("App rodando na porta 8080");});