//Variáveis globais
let lista = []
let final = document.getElementById('fim')
let res = document.getElementById('ires')

//Função de Adicionar
function adicionar(){
    //Variáveis Adicionar()
    let num = Number(document.getElementById('inum').value)
    let item = document.createElement('option')
    item.text = `Número ${num} adicionado`
    
    //reset finalizar
    final.innerHTML = ''

    //lógica
    if(num >= 1 && num <=100){
        const analise = (n) => {
            if(lista.includes(n)===true){
                return true
            }else{
                return false
            }
        }
    
        if(analise(num)===true){
            window.alert('ja tem')
        } else{
            res.appendChild(item)
            lista.push(num)
        }
    } else{
        window.alert('[ERRO] Insira os dados e tente novamente!')
    }
}

//Função de finalizar
function finalizar(){
    //Ordenar do menor pro maior
    lista.sort(function(a, b){return a-b})

    //Lógica
    if(lista.length==0){
        window.alert('[ERRO] Insira um valor na lista e tente novamente')
    } else{
        //Quant. Valor
        final.innerHTML = `<p><strong>Quantidade</strong> de valores: <span>${lista.length}</span></p>`

        //Maior valor
        final.innerHTML += `<p><strong>Maior</strong> valor: <span>${lista[lista.length - 1]}</span></p>`

        //Menor valor
        final.innerHTML += `<p><strong>Menor</strong> valor <span>${lista[0]}</span></p>`

        //Soma valores
        const soma = () =>{
            let abc = lista[0]

            for(i=1;i<lista.length;i++){
                abc += lista[i]
            }
            return abc
        }
        final.innerHTML += `<p><strong>Soma</strong> dos valores: <span>${soma()}</span></p>`

        //Média valores
        final.innerHTML += `<p><strong>Média</strong> dos valores: <span>${(soma()/lista.length).toFixed(1)}</span></p>`
    }
}

//Função de limpar
function limpar(){
    lista = []
    res.innerHTML = ''
    final.innerHTML = ''
}