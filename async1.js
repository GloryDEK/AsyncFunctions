//Fonction qui indique l'attente
function attente(ms){
    return new Promise((resolve) =>{
        setTimeout(resolve, ms);
    });
}

// Async-wait
async function iterateWithAsyncAwait(values) {
    for(const value of values){
        console.log(value);
        await attente(2000); //definition de la duree d'attente
    }
}

//Exemple d'execution
const values = [3, 7, 11, 9, 0,-3];
iterateWithAsyncAwait(values);


