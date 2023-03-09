import IngressoModel from "../models/IngressoModel.js"
import ValidacoesIngresso from "../services/ValidacoesIngresso.js"
import IngressoMetodos from "../DAO/IngressoMetodos.js"

//IngressoMetodos.createTableIngresso()

class Ingresso {
    static rotas(app) {
        app.get('/ingresso', async (req, res) => {
            try {
                const response = await IngressoMetodos.listarTodosIngr