function fecthDataFromUrl(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { url:url, message: 'Donnees recues'};
            //Condition pour succes ou echec
            if (Math.random() > 0.1){
                resolve(data);
            } else{ 
                reject(new Error("Erreur: nous n'avons pas pu recuperer les donnees."));
            } 

        }, Math.floor(Math.random() * 2000) + 1000);
    });
}

async function parallelCalls(url){
    console.log("Appelle aux URLs en parallele ");

    try {
        const results = await Promise.all(url.map(url => fecthDataFromUrl(url)));
        console.log("Résultats des appels d'Urls:");
        results.forEach(result => {
            console.log(`Réponse pour ${result.url}: ${result.message}`);
        });
    } catch (error) {
        console.error("Une erreur est survenue", error);
    }
}

// Tableau d'exemples d'URLs
const url = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3"
];

// Exécuter la fonction avec les URLs
parallelCalls(url);
