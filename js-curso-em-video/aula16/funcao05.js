//Recursividade

function fatorial(n){
    if(n===1){
        return 1
    } else{
        return n *= fatorial(--n)
    }
}

console.log(fatorial(5))