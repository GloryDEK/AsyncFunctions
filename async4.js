//Fonction qui appelle  a des Api
function fecthDataFromApi1(){
    return new Promise((resolve) => {
        setTimeout (() => {
           const data = { message:'Les donnees sont bien recues depuis API1!'};
            resolve(data);
        }, 2000);       
    });
}

function fecthDataFromApi2(){
    return new Promise((resolve) => {
        setTimeout (() => {
           const data = { message:'Les donnees sont bien recues depuis API2!!'};
            resolve(data);
        }, 3000);       
    });
}

// function asynchrone 
async function concurrentRequests(){
    console.log("Lancement des appels aux API 1 et 2");

    try {
        const [result1, result2] = await Promise.all([
            fecthDataFromApi1(),
            fecthDataFromApi2(),
        ]);

        console.log("Les resultats simultanees des API: ");
        console.log("Reponse API1: ", result1.message);
        console.log("Reponse API2: ", result2.message);

    } catch (error) {
        console.error("Une erreur est survenue", error);
    }
}

//Execution
concurrentRequests();