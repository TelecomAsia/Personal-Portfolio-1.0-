import SalaModel from "../models/SalaModels.js";
import ValidacoesSala from "../services/ValidacoesSala.js";
import DatabaseSalaMetodos from "../DAO/DatabaseSalaMetodos.js";
import {
    response
} from "express";

class Salas {
    static rotas(app) {
        app.get("/sala", async (req, res) => {
            const response = await DatabaseSalaMetodos.listarTodasSalas()
            res.status(200).json(response)
        })

        app.get("/sala/:id", async (req, res) => {
            try {
                const Sala = await DatabaseSalaMetodos.listarSalaPorId(req.params.id)
                if (!Sala) {
                    throw new Error("Não encontradamos nenhuma sala com esse Id")
                }
                res.status(200).json(Sala)
            } catch (error) {
                res.status(404).send(error.message)
            }
        })

        app.post("/sala", async (req, res) => {
            const isValid = ValidacoesSala.isValid(...Object.values(req.body))
            try {
                if (!isValid) {
                    throw new Error({
                        Erro: "Erro, sua sala deve ser enviada como objeto JSON com os atirbutos: cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual, categoria_da_sala"
                    })
                } else {
                    const Sala = new SalaModel(...Object.values(req.body))
                    const response = await DatabaseSalaMetodos.inserirSala(Sala)
                    res.status(201).json(response)
                }
            } catch (error) {
                res.status(400).json({
                    Error: "revise os campos de sua requisição, confira se os dados estão de acordo com a tipagem e se o endereço está escrito corretamente"
                })
            }
        })

        app.put("/sala/:id", async (req, res) => {
            const isValid = ValidacoesSala.isValid(...Object.values(req.body))
            try {
                if (isValid) {
                    const sala = new SalaModel(...Object.values(req.body))
                    const response = await DatabaseSalaMetodos.atualizaSalaPorId(req.params.id, sala)
                    res.status(200).json(response)
                } else {
                    res.status(400).json({
                        Erro: "Sua sala deve ser enviada como objeto JSON com os atirbutos: cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual -TRUE ou FALSE-, categoria_da_sala"
                    })
                }
            } catch (error) {
                res.status(404).json({
                    Error: "revise os campos de sua requisição, confira se os dados estão de acordo com a tipagem e se o endereço está escrito corretamente, com parâmetro ID"
                })
            }
        })

        app.delete("/sala/:id", async (req, res) => {
            try {
                const salas = await DatabaseSalaMetodos.deletaSalaPorId(req.params.id)
                if (!salas) {
                    throw new Error("Sala não encontrada")
                }
                res.status(200).json(salas)
            } catch (error) {
                res.status(404).json({
                    Error: error.message
                })
            }
        })
    }
}



export default Salas;