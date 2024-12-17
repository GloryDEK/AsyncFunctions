//Fonction qui appelle l'Api
function appelleApi(){
    return new Promise((resolve) => {
        setTimeout (() => {
           const appelleData = { message:'Les donnees sont bien recues depuis API!!!!'};
            resolve(appelleData);
        }, 2000);       
    });
}

//Function async avec await
async function awaitCall(){
    console.log("Appelle de l'API en cours");

    const data = await appelleApi(); //atttente des donnees de l'Api

    console.log("Reponse de l'API : ", data);
} 

//Execution
awaitCall();