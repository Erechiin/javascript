for(let i = 0; i < 5; i++){
    console.log(i)
} 
// faz a verificação, executa e incrementa, nessa ordem.

// isso aq é usando o label
markloop: for(let a = 0; a < 3; a++){
    if(a === 2){
        continue markloop
    }
}