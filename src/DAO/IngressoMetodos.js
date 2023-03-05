
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