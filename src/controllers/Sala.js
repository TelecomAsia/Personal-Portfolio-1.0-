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
                    const response = await DatabaseSalaMetodos.inserirSala(