
import DAO from "./DAO.js"

class IngressoMetodos extends DAO {

    static async createTableIngresso(){
        const query = `
        CREATE TABLE IF NOT EXISTS ingresso(
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            filme TEXT, 
            sala INTEGER, 
            cadeira INTEGER, 
            dataHora TEXT, 
            precoIngresso FLOAT
        )
            `
        const response = await this.createTable(query)
        return response
    }
    
    static async inserirIngresso(ingresso){
        const query = `INSERT INTO ingresso (filme, sala, cadeira, dataHora, precoIngresso) 
                       VALUES (?,?,?,?,?)`
        const response = await this.inserir(ingresso, query)
        return response
    }

    static async listarTodosIngressos(){
        const query = ` SELECT * FROM ingresso`
        const response = await this.listarTodos(query)
        return response
    }

    static async listarIngressoPorId(id){
        const query = ` SELECT * FROM ingresso WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }

    static async atualizarIngressoPorId(id, ingresso) {
        const query = `UPDATE ingresso SET filme = ?, 
                        sala = ?, 
                        cadeira = ?, 
                        dataHora = ?, 
                        precoIngresso = ? 
                        WHERE id = ?`
        const response = await this.atualizarPorId(ingresso, id, query)
        return response
    } 

    static async deletarIngressoPorId(id) {
        const query = `DELETE FROM ingresso WHERE id = ?`
        const response = await this.deletarPorId(query, id)
        return response
    }
}

export default IngressoMetodos