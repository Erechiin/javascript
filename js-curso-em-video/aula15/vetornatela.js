/*

--> Modo menos simplificado

let valores = [2,3,9,1,5,4,13,22,41]

for(let i=0;i<valores.length;i++){
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

*/

// --> Modo Simplificado

let valores = [2,3,9,1,5,4,13,22,41]

for( let i in valores){
    console.log(`POSIÇAO:${i} e VALOR:  ${valores[i]}`)
}

//--> Procurando valores

console.log(valores.indexOf(9))

// --> Ordenando
    // valores.sort()
    valores.sort(function(a, b){return a-b})
    console.log(valores)