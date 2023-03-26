import ValidacoesService from "./ValidacoesService.js";
class ValidacoesSala extends ValidacoesService {

    /**
     * 
     * @param {number} cComum 
     * @returns boolean 
     */
     static validaCadeira(num) {
        return this.validaNumerosInteiros(num);
    }

    /**
     * 
     * @param {boolean} cetificado 
     * @returns boolean
     */
    static validaCertificadoDeVistoriaAnual(certificado) {
        if (typeof certificado != "boolean") {
            return false
        } else {
            return true
        }
    }

    /**
     * 
     * @param {string} tipo
     * @returns boolean 
     */
    static validaCategoriaDaSala(tipo) {
        let tipos = tipo.toLowerCase()
        switch (tipos) {
            case 'imax':
            case 'xd':
            case 'macro xe':
            case 'xplus':
            case 'reald':
            case 'd-box':
                return true
            default:
                return false
        }
    }