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
            } catch(error) {
                res.status(400).json(error.message)
            }
        })

        app.post('/ingresso', async (req, res) => {
            const isValid = ValidacoesIngresso.isValid(...Object.values(req.body))

            try {
                if(isValid) {
                    const ingresso = new IngressoModel(...Object.values(req.body))
                    const response = await IngressoMetodos.inserirIngresso(ingresso)
                    console.log(response)
                    res.status(201).json(response)
                } else {
                     throw new Error("Não foi possível incluir o ingresso em nosso sistema.")
                 }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put('/ingresso/:id', async (req, res) => {
           const isValid = ValidacoesIngresso.isValid(...Object.values(req.body))

            try{
                if(isValid) {
                const ingresso = new IngressoModel(...Object.values(req.body))
                const response = await IngressoMetodos.atualizarIngressoPorId(req.params.id, ingresso)
                res.status(201).json(response)
                }
                else{
                    res.status(400).json({Erro: "Seu ingresso deve ser enviado como objeto JSON com a tipagem correta dos atributos."})
                }
            } catch(error) {
                res.status(400).json({error: 'Não foi possível realizar a atualização do ingresso em nosso sistema.'})
            }
        })

        app.delete('/ingresso/:id', async(req, res) => {
            try {
                const ingresso = await IngressoMetodos.deletarIngressoPorId(req.params.id)
                if(!ingresso) {
                    throw new Error("Ingresso não encontrado em nosso sistema.")
                }
                res.status(200).json(ingresso)
            } catch(error) {
                res.status(400).json({Error: error.message})
            }
        })
    }
}

export default Ingresso