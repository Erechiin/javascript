function gerar(){
    let num = Number(document.getElementById('inmbr').value)
    let tab = document.getElementById('itab')
    let res

    console.log(num)
    console.log(tab)

    tab.innerHTML = ''
    for(c=0;c<=10;c++){
        res = num*c
        tab.innerHTML += `${num} x ${c} = ${res} `
    }
}