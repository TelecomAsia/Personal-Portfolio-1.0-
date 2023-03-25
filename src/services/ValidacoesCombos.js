export default class ValidacoesCombos {
    /**
     * 
     * @param {String} name 
     * @returns boolean
     */
    static validaName(name){                                   
        if (name.length >= 4 && name.length <= 12){
            return true
        } 
        else{
            return false
        }
    }

    /**
     * 
     * @param {String} item1 
     * @param {String} item2 
     * @param {String} item3 
     * @returns boolean
     */
    static validaItens(...itens){
        const itensOriginais = [...itens]
        const itensFilter = [... new Set (itensOriginais)]
        return itensOriginais.length == itensFilter.length
    }

    /**
     * 
     * @param {float} pric