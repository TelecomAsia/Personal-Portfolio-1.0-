
import DAO from "./DAO.js"

class DatabaseSalaMetodos extends DAO{

    static async createTableSala(){
        const query = `

        CREATE TABLE IF NOT EXISTS sala(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cadeiras_comuns INTEGER,
            cadeiras_namoradeiras INTEGER,
            espaços_cadeirantes INTEGER,
            certificado_de_vistoria_anual BIT NOT NULL,
            categoria_da_sala VARCHAR(10)
            )
            `
        const response = await this.createTable(query)
        return response;
    }

    static async inserirSala(Sala){
        const query = `INSERT INTO Sala (cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual, categoria_da_sala) VALUES (?,?,?,?,?)`
        const response = await this.inserir(Sala, query)
        return response;
    }

    static async listarTodasSalas(){
        const query = ` SELECT * FROM Sala`
        const response = await this.listarTodos(query)
        return response;
    }

    static async listarSalaPorId(id){
        const query = ` SELECT * FROM Sala WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response;
    }

    static async atualizaSalaPorId(id, sala){
        const query = `UPDATE Sala SET (cadeiras_comuns, cadeiras_namoradeiras, espaços_cadeirantes, certificado_de_vistoria_anual, categoria_da_sala) = (?,?,?,?,?) WHERE id = ?`
        const response = await this.atualizarPorId(sala, id, query)
        return response;
    }

    static async deletaSalaPorId(id){
        const query = `DELETE FROM Sala WHERE id = ?`
        const response = await this.deletarPorId(query, id)
        return response;
    }
}

export default DatabaseSalaMetodos