
import ValidacoesService from "./ValidacoesService.js"

class ValidacoesIngresso extends ValidacoesService{
    static validaFilme(filme) {
        return filme.length >= 2
    }

    /**
     * @param {number} sala 
     * @returns boolean
     */
    static validaSala(sala) {
        const salaIsNum = Number(sala)
        return salaIsNum >= 1
    }

    /**
     * @param {number} cadeira 
     * @returns boolean
     */
    static validaCadeira(cadeira) {
        return this.validaNumerosInteiros(cadeira);
    }

    static validaHora(hora){
        return hora.length == 16;
    }

    /**
     * @param {number} precoIngresso 
     * @returns boolean
     */
    static validaPrecoIngresso(precoIngresso) {
        const preco = Number(precoIngresso)
        return preco == precoIngresso
    }

     /**
     * @param {string} filme 
     * @param {number} sala 
     * @param {number} cadeira
     * @param {number} precoIngresso 
     * @returns boolean
     */
      static isValid(filme, sala, cadeira, hora, precoIngresso){
        return this.validaFilme(filme) 
        && this.validaSala(sala) 
        && this.validaCadeira(cadeira) 
        && this.validaHora(hora)
        && this.validaPrecoIngresso(precoIngresso)
    }

}

export default ValidacoesIngresso