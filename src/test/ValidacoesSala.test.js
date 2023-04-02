import ValidacoesSala from "../services/ValidacoesSala.js"


test("Validar se o número de cadeiras namoradeiras é um número inteiro", ()=>{
    expect(ValidacoesSala.validaCadeira(1.45)).toBe