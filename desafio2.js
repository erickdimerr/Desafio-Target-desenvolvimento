function letraA(str) {
    let quantidadeMinusc = 0;
    let quantidadeMaiusc = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            quantidadeMinusc++;
        } else if (str[i] === 'A') {
            quantidadeMaiusc++;
        }
    }
    
    console.log(`A letra a minúscula aparece ${quantidadeMinusc} vezes na string.`);
    console.log(`A letra A maiúscula aparece ${quantidadeMaiusc} vezes na string.`);
}

// Exemplo
const minhaString = "A rata roeu a roupa do rei de romA";
letraA(minhaString);
