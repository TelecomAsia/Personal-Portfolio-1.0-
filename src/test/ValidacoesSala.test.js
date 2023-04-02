import ValidacoesSala from "../services/ValidacoesSala.js"


test("Validar se o número de cadeiras namoradeiras é um número inteiro", ()=>{
    expect(ValidacoesSala.validaCadeira(1.45)).toBe(false)
})

test("Validar se o número de cadeiras comuns é um número inteiro", ()=>{
    expect(ValidacoesSala.validaCadeira(false)).toBe(false)
}) 


test("Validar se o número de espaços disponíveis para acesso de cadeirantes é um número inteiro", ()=>{
    expect(ValidacoesSala.validaCadeira(5/2)).toBe(false)
}) 

test("Validar se a sala está com o certificado de vistoria anual em dia ou não", ()=>{
    expect(ValidacoesSala.validaCertificadoDeVistoriaAnual("vedadeiro")).toBe(false)
}) 

test("Validar se a sala está com o certificado de vistoria anual em dia ou não", ()=>{
    expect(ValidacoesSala.validaCertificadoDeVistoriaAnual(true)).toBe(true)
}) 

test("Validar se a categoria da sala está entre os tipos existentes e disponíveis", ()=>{
    expect(ValidacoesSala.validaCategoriaDaSala("imas")).toBe(false)
}) 

test("Validar se a categoria da sala está entre os tipos existentes e disponíveis", ()=>{
    expect(ValidacoesSala.validaCategoriaDaSala("imax")).toBe(true)
}) 
