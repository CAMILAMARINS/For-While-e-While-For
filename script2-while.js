let i=0, soma
var conta_atual = 0 

while(i < 20){

    conta_atual= (conta_atual * 2) + 1 

    console.log(conta_atual)

    soma = soma + conta_atual

    i++
}

    console.log(`Resultado =  ${soma}`)