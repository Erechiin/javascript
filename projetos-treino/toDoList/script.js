// Objeto para organizar as funções e poder usar elas independente da posição q elas foram criadas
const metodos = {
    listaItens:[],
    criarLi:()=>{
        let CreateLi = document.createElement('li')
        return CreateLi
    },
    criarbttn:(index)=>{
        let createButton = document.createElement("button")
        createButton.setAttribute("type","button")
        createButton.setAttribute("data-id", index)
        createButton.setAttribute("class", "btexcluir")
        createButton.innerText = "excluir"
        return createButton
    },
    criarCheckbox:(index)=>{
        let createCheck = document.createElement("input")
        createCheck.setAttribute("type","checkbox")
        createCheck.setAttribute("class","selecao")
        createCheck.setAttribute("data-id", index)
        return createCheck
    },
    criarP:(texto, index)=>{
        let createP = document.createElement("p")
        createP.innerText = texto
        createP.classList.add("selecao")
        createP.setAttribute("data-id", index)
        return createP
    },
    reset:(elemento)=>{
        elemento.innerHTML = ""
    },
    atualizarStorage:()=>{
        localStorage.setItem("lista",JSON.stringify(metodos.listaItens))
    },
    getData:()=>{ //pega o texto mandado pelo usuario e manda pra lista
        const item = document.getElementById("inome")
        let itemValue = item.value

        if(itemValue.length == 0){
            item.setAttribute("placeholder", "Digite um valor válido")
        } else{
            metodos.listaItens.push({tarefa:itemValue,status:""})
            item.value = ""
            item.setAttribute("placeholder", "Digite algo e tecle enter para enviar")
            metodos.atualizarStorage()
            metodos.mostrarLista()
        }
    },
    removerItem:(evento)=>{ //remove o item, tanto na ul, quanto na lista
        //verifica se elemento que acionou o evento possui 'btexcluir' como classe
        const li = evento.target.parentElement; //pega o pai do elemento que acionou o evento
        const id = evento.target.dataset.id //pega o data-id do elemento que acionou o evento
        li.remove() //remove a li
        metodos.listaItens.splice(id,1) //remove o elemento na lista
        metodos.atualizarStorage()
        metodos.mostrarLista() 
    },
    analiseClick:(evento)=>{
        if(evento.target.classList.contains('btexcluir')){
            metodos.removerItem(evento)
        }else if(evento.target.classList.contains('selecao')){
            metodos.itemConcluido(evento)
        }
    },
    itemConcluido:(evento)=>{
        const id = evento.target.dataset.id
        const item = metodos.listaItens[id]
        const itemStatus = item.status
        switch(itemStatus){
            case "concluido":
                item.status = ""
                break
            default:
                item.status = "concluido"
                break
        }
        metodos.atualizarStorage()
        metodos.mostrarLista()
        
    },
    mostrarLista:()=>{ //atualiza a lista, os data-id dos botões e mostra os itens na ul
        let listaUl = document.getElementById("lista")
        const storageDataLista = JSON.parse(localStorage.getItem("lista"))
        if(listaUl.innerHTML != ""){
            metodos.reset(listaUl)
        }
        if(storageDataLista!=="" && storageDataLista!==null && storageDataLista!==undefined){
            metodos.listaItens= [...storageDataLista]
        }

        metodos.listaItens.forEach(mostrar)

        function mostrar(itemMostrar, index){
            const li = metodos.criarLi()
            
            li.appendChild(metodos.criarCheckbox(index))
            
            li.appendChild(metodos.criarP(itemMostrar.tarefa, index))
            
            li.appendChild(metodos.criarbttn(index)) //manda o index do item na lista como parametro pra função criarbttn(), que define esse index como data-id do botão
            
            listaUl.appendChild(li)
            
            const listaUlFilhos = listaUl.children
            const listaLi = listaUlFilhos[index]
            const listaLiCheck = listaLi.children[0]
            const ListaLiP = listaLi.children[1]
            switch(itemMostrar.status){
                case "concluido":
                    listaLi.classList.toggle("concluido")
                    listaLiCheck.checked = true
                    ListaLiP.classList.toggle("concluido")
                    break
                default:
                    if(listaLi.classList.contains("concluido")){
                        listaLi.classList.toggle("concluido")
                        ListaLiP.classList.toggle("concluido")
                    }
                    listaLiCheck.checked = false
                    break
            }
        }
    }
}

//Mostra a lista quando a pagina carregar (se tiver algo dentro)
metodos.mostrarLista()

// DELEGAÇÃO DE EVENTOS

const pai = document.querySelector("#lista")
//addEventListener para quando ouver um click dentro da ul
pai.addEventListener('click', (event)=>{
    // metodos.removerItem(event)
    metodos.analiseClick(event)
})
pai.addEventListener('change', (event)=>{
    metodos.itemConcluido(event)
})

//addEventListener para quando der enter no formulario
const form = document.querySelector("form")
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    metodos.getData()
})

//addEventListener para quando apertar no botão de enviar o item
// const enviar = document.querySelector("#enviar")
// enviar.addEventListener('click', (event)=>{
//     event.preventDefault()
//     metodos.getData()
// })