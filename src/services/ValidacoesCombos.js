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
     * @param {float} price 
     * @returns boolean
     */
    static validaPreco(price) {
        if (price <=60 && price >= 15) {
            return true;
        }
        else{
            return false
        }
    }

    /**
     * @param {String} item1
     * @param {String} item2
     * @param {String} item3
     * @returns boolean
     */
    static validaCombos(name, price, item1, item2, item3){
        return this.validaName(name)
            && this.validaPreco(price)
            && this.validaItens(item1, item2, item3)
    }
}