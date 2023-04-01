export default class ValidacoesFilmes{
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome){
        return nome.length >= 1
    }

     /**
     * 
     * @param {string} genero 
     * @returns boolean
     */
    static validaGenero(genero){
        return genero.length >= 1
    }

     /**
     * 
     * @param {string} duracao 
     * @returns boolean
     */
    static validaDuracao(duracao){
        return duracao.length >= 1
    }

     /**
     * 
     * @param {string} anoLancamento 
     * @returns boolean
     */
    static validaAnoLancamento(anoLancamento){
        return anoLancamento.length >= 1
    }

     /**
     * 
     * @param {string} diretor 
  