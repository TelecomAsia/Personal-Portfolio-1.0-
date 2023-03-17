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

        app.get("/sala/:id", asy