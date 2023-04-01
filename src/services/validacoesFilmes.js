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
     * @returns boolean
     */
    static validaDiretor(diretor){
        return diretor.length >= 1
    }

     /**
     * 
     * @param {string} sinopse 
     * @returns boolean
     */
    static validaSinopse(sinopse){
        return sinopse.length >= 1
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} genero 
     * @param {string} duracao 
     * @param {string} anoLancamento 
     * @param {string} diretor 
     * @param {string} sinopse 
     * @param {string} image
     * @returns boolean
