let nivelGlobal = 'Nível Gobal'
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined

function FuncaoNivel1(){
    let nivel1 = 'nivel 1'

    function FuncaoNivel2(){
        let nivel2 = 'nivel 2'

        function FuncaoNivel3(){
            let nivel3 = 'nivel 3'
            console.log(`Resultado da Função nivel 3: ${nivelGlobal}, ${nivel1}, ${nivel2}, ${nivel3}`)
        }
        FuncaoNivel3()

        console.log(`Resultado da Função nivel 2: ${nivelGlobal}, ${nivel1}, ${nivel2}, ${nivel3? nivel3:'Nivel 3 Indisponível'}`)
    }
    FuncaoNivel2()

    console.log(`Resultado da Função nivel 1: ${nivelGlobal}, ${nivel1}, ${nivel2? nivel2:'Nível 2 Indisponível'}, ${nivel3? nivel3:'Nível 3 Indisponível'}`)
}
FuncaoNivel1()

//Se a função não achar a variável no escopo dela, ela tenta procurar no escopo global