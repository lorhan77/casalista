module.exports = function (app) {
    var PresentesController = {
        index: function (req, res) {
            res.render("presentes", {presentes: req.session.lista.presentes}); },
        comprar: function (req, res) {
            var id = req.params.id;
            req.session.lista.presentes[id].comprado = true;
            res.redirect("/presentes"); },
        apagar: function (req, res) {
                var id = req.params.id;
                req.session.lista.presentes[id].apagado = true;
               (async () => {
                    const db = require("../db");              
                    const presentes = await db.execSQLQuery(`DELETE FROM presentes WHERE nome = '${id}' `, res);
                })},
        listar: function (req, res) {
                (async () => {
                    const db = require("../db");
                    const presentes = await db.execSQLQuery('SELECT * FROM presentes', res);                   
                })();
                },
        incluir: function (req, res) {
                    var lista = req.session.lista;
                    var presente = {
                        nome: req.body.nome,
                        valor: req.body.valor
                     };
                     lista.presentes.push(presente);
                      {
                        (async () => {
                            const db = require("../db");              
                            const nome = presente.nome;
                            const valor = presente.valor;
                            const status = 1;
                            const presentes = await db.execSQLQuery(`INSERT INTO presentes(Nome, Valor, Status) VALUES('${nome}','${valor}','${status}')`, res);
                        })(); }},
        incluirnobanco: function (req, res) {
                    (async () => {
                        const db = require("../db");
                        console.log('conectou pela API');                
                        const nome = req.body.nome;
                        const valor = req.body.valor;
                        const status = 1;
                        const presentes = await db.execSQLQuery(`INSERT INTO presentes(Nome, Valor, Status) VALUES('${nome}','${valor}','${status}')`, res);
                    })(); }
    };
    return PresentesController;
};