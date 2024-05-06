export function showCurrencyBRL(value,cur){
    return value.toLocaleString('pt-BR',{style: 'currency',currency:cur})
}