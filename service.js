const express = require("express");
const fs = require("fs");
const server = express();

const loadApi = () => {
    const dadosApi = "./lanches.json";
    fs.readFile(dadosApi, "utf8", (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo JSON:", err);
            return;
        }

        const json = JSON.parse(data);

        server.get("/lanches", (req, res) => {
            return res.json(json.categories);
        });
    });
};

loadApi();

server.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
