export default class ValidacoesService {
    static validaNumerosInteiros(num) {
        if (typeof num != "boolean" ) {
            const number = Number(num)
            let Valid = Number.isInteger(number)
            if (Valid && number > 0) {
                return true;
            }
        }
        return false;
    }
}