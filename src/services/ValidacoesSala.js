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
           