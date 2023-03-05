import DAO from "./DAO.js"
// import Database from "../infra/Database.js"

class FilmesMetodos extends DAO{
    static async createTableFilmes() {
        const query = `
        CREATE TABLE IF NOT EXISTS filmes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            genero VARCHAR,
            duracao VARCHAR,
            anoLancamento VARCHAR,
            diretor VARCHAR,
            sinopse TEXT,
            image TEXT
        )`
            const response = await this.createTable(query)
            return response
    }

    static async inserirFilme(filme) {
        const query = `INSERT INTO filmes (nome, genero, duracao, anoLancamento, diretor, sinopse, image) VALUES (?, ?, ?, ?, ?, ?, ?)`
        const response = await this.inserir(filme, query)
        return response
    }

    static async listarTodosFilmes(){
        const query = ` SELECT * FROM filmes`
        const response = await this.listarTodos(query)
        return response
    }


    static async listarFilmePorId(id){
        const query = ` SELECT * FROM filmes WHERE id = ?`
        const response = await this.listarPorId(id, query)
        return response
    }
    
    static async deletaFilmePorId(id){
        const query = `DELETE FROM filmes WHERE id = ?`
        const response = await this.deletarPorId(query, id)
        return response
    }

    static async atualizaFilmePorId(id, filme){
        const query = `UPDATE filmes SET (nome, genero, duracao, anoLancamento, diretor, sinopse, image) = (?,?,?,?,?,?,?) WHERE id = ?`
        const response = await this.atualizarPorId(filme, id, query)
        return response;
    }
}

export default FilmesMetodos

