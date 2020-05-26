// 1.1 What approach are you going to use to solve the proposed problem?
    // Utilizei a aboradagem da recursividade de cauda.
// 1.2 What steps are you going to take to ensure that your solution and implementation are correct?
    // Para esse caso utilizei somente o teste de mesa 
// 1.3 How are you going to optimize (in terms of memory, speed or both) your implementation?
    // O uso da recursividade de cauda é o metodo escolhido pensando em otimização
    // onde é feito uma otimizacao na manipulação do acumulador (i)

export const challenge1 = (n: number): number => fatorial(1, n);
const fatorial = (i: number, val: number): number =>{
    if (val == 0) {
        return 1;
    } else {
        return val == 1 ? i : fatorial(i * val, val - 1);
    }
}
//console.log(challenge1(10))

// 2.1 What approach are you going to use to solve the proposed problem?
    // Utilizei programção funcional 
// 2.2 What steps are you going to take to ensure that your solution and implementation are correct?
    // Para este caso alem de efetuar o teste de mesa organizeis os problemas em etapas resolvendo um problema por vez
// 2.3 How are you going to optimize (in terms of memory, speed or both) your implementation?
    // Pensando em optimização inicialmente organizo meus dados e utilizo a função every() a fim de encontrar a primeira ocorrencia
    // evitando o processamento de toda minha lista na maioria dos casos

const names: Array<string> = ["bob", "claire", "john", "william"]
function compare(currentValue:string): boolean{
    const arr: Array<string> = [currentValue, this].sort( (a,b) => a.length >= b.length ? -1: 1)
    const result:boolean = arr[0].indexOf(arr[1]) != 0 ? true: false
    return result
}
export const challenge2 = (arg:string) => names.every(compare,arg)
    
//console.log(challenge2('john'))