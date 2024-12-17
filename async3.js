//Part one
//Fonction qui appelle l'Api avec condition
function appelleApi(success){
    return new Promise((resolve, reject) => {
        setTimeout (() => {
                if (success) {
           const appelleData  = { message:'Les donnees sont bien recues depuis API!!!!'};
            resolve(appelleData);
             } else{ 
                reject(new Error("Erreur: nous n'avons pas pu recuperer les donnees."))}            
    } ,2000 );
});
}

//Function async avec await
async function awaitCall(){
    console.log("Appelle de l'API en cours");

    try {
        const data = await appelleApi(true); //atttente des donnees de l'Api ,si true les donnees sont recues sinon erreur 
        console.log("Reponse de l'API : ", data);

    } catch (error) {
        console.error("Une erreur est survenue.", error.message);
    }
}

//execution 
awaitCall();


//Part two
function attente(ms){
    return new Promise ((resolve) => setTimeout(resolve, ms));
}

//Trois fonctions
async function function1() {
    await attente(2000);
    console.log("Premiere fonction executee")
}

async function function2() {
    await attente(2000);
    console.log("Deuxieme fonction executee")
}

async function function3() {
    await attente(2000);
    console.log("Troisieme fonction executee")
}

//Fonction pour executer la chaine 
async function chainedAsyncFunctions() {
    console.log("Demarrage de l'execution des fonction asynchrones ...");
    await function1();
    await function2();
    await function3();
    console.log("Toutes les fonctions ont ete sequentiellement executees.");
}

// Execution dans le terminal
chainedAsyncFunctions();