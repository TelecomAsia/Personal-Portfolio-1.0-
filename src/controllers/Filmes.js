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
           const isValid = ValidacoesFilmes.isValid(...Object.values(req.body))
            try {
                if(isValid){
                const filme = new FilmesModels(...Object.values(req.body))
                const response = await  FilmesMetodos.inserirFilme(filme)
                res.status(201).json(response)
            }else{
                throw new Error("Erro na requisição. Por gentileza, verifique se todas as informações estão preenchidas")
            } 
            } catch (error) {
                res.status(400).json(error.message)
                console.log(error.message)
            }

        })

        app.put("/filmes/:id", async (req, res)=> {
            const isValid = ValidacoesFilmes.isValid(...Object.values(req.body))
            if(isValid){
                const filme = new FilmesModels(...Object.values(req.body))
                const response = await FilmesMetodos.atualizaFilmePorId(req.params.id, filme)
                res.status(200).json(response)
            } else {
                res.status(400).json({Erro:"Erro, verifique se inseriu as informações corretas de acordo com a documentação."})
            }
        })


        app.delete("/filmes/:id", async (req, res) => {
            try {                
                const filme = await FilmesMetodos.deletaFilmePorId(req.params.id)
                if(!filme){
                    throw new Error("Filme não encontrado")
                }
                res.status(200).json(filme)
            } catch (error) {    
                res.status(404).json({Error: error.message})
            }
                        
        })
    }
   }

export default Filmes
