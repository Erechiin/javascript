//This em um método de um objeto

const ex = {
    prop: 100,
    f: function(){
        return this.prop //Está apontando para o objeto
    }
}

console.log(ex.f())