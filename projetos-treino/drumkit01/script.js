const ObjectVar = {
    botoes: document.getElementById('container'),
    a_sound: document.getElementById('a_sound'),
    s_sound: document.getElementById('s_sound'),
    d_sound: document.getElementById('d_sound'),
    f_sound: document.getElementById('f_sound'),
    g_sound: document.getElementById('g_sound'),
    h_sound: document.getElementById('h_sound'),
    j_sound: document.getElementById('j_sound'),
    k_sound: document.getElementById('k_sound'),
    l_sound: document.getElementById('l_sound')
}

ObjectVar.botoes.addEventListener('click', tocar = (event) => {
    let currentSound = `${event.target.id}_sound`
    if(currentSound!=='container_sound'){
        ObjectVar[currentSound].currentTime=0
        ObjectVar[currentSound].play()
    }
})