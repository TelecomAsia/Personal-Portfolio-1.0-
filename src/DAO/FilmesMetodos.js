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
        const query = `INSERT INTO filmes (nome, genero, dura