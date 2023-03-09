import IngressoModel from "../models/IngressoModel.js"
import ValidacoesIngresso from "../services/ValidacoesIngresso.js"
import IngressoMetodos from "../DAO/IngressoMetodos.js"

//IngressoMetodos.createTableIngresso()

class Ingresso {
    static rotas(app) {
        app.get('/ingresso', async (req, res) => {
            try {
                const response = await IngressoMetodos.listarTodosIngressos()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error.message)
            }
        })
        app.get('/ingresso/:id', async (req, res) => {
            try {
                const ingresso = await IngressoMetodos.listarIngressoPorId(req.params.id)
                if (!ingresso) {
                    throw new Error("Ingresso não identificado em nosso sistema.");
                }
                res.status(200).json(ingresso)
