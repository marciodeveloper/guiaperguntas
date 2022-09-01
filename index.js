const express = require("express");
const app = express();

//Estou pedindo para o express usar o EJS como view engine
app.set("view engine", "ejs");	

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, () => {console.log("App rodando na porta 8080");});