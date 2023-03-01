import DAO from "./DAO.js"
//import Database from "../infra/Database.js"

class CombosMetodos extends DAO {
    
    static async createTableCombos() {
        const query = `
            CREATE TABLE IF NOT EXISTS combos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR,
            price INTEGER,
            item1 VARCHAR,
            item2 VARCHAR,
            item3 VARCHAR
        )`
        const response = await this.createTable(query)
        return response;
    }