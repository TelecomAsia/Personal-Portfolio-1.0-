import FilmesModels from "../models/FilmesModel.js"
import ValidacoesFilmes from "../services/validacoesFilmes.js"
import FilmesMetodos from '../DAO/FilmesMetodos.js'



class Filmes{
    static rotas(app){
        app.get("/filmes", async (req, res) => {
            const response = await FilmesMetodos.listarTodosFilmes()
            res.status(200).json(response)
        })

        app.get("/filmes/:id", async (req, res) => {
            try {
                const filme = await FilmesMetodos.listarFilmePorId(req.params.id)
                if(!filme){
                    throw new Error("Filme não encontrado para o id")
                }
                res.status(200).json(filme)
            } catch (error) {
                res.status(404).json(error.message)
                
            }
        })

        app.post("/filmes", async (req, res) => {
    