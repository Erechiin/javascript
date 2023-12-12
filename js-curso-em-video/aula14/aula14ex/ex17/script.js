function gerar(){
    let num = document.getElementById('inmbr').value
    let tab = document.getElementById('itab')
    let res

    console.log(num)
    console.log(tab)

    if(num.length == 0){
        window.alert('[Erro] insira os dados novamente!')
    } else{
        tab.innerHTML = ''
        num = Number(num)
        for(c=0;c<=10;c++){
            res = num*c
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${res}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}