import FilmesModels from "../models/FilmesModel.js"
import ValidacoesFilmes from "../services/validacoesFilmes.js"
import FilmesMetodos from '../DAO/FilmesMetodos.js'



class Filmes{
    static rotas(app){
        app.get("/filmes", async (req, res) => {
            const response = await FilmesMetodos.listarTodosFilmes()
            res.status(200).json(response)
        })

 