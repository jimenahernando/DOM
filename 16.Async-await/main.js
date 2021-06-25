const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promesa resuelta`)
        }, 2000);
    });
}

function fetchProducts (){
    getData()
    .then((res) => {
        if (res.ok){
            console.log('ok');
        } else {
            console.log(res);    
        }
    })
    .catch((error) => console.log(error));
}

//ASYNC AWAIT
async function fetchProductsAsync(){
    //intenta hacer esto
    try{
        const res = getData();
        if (res.ok){
            console.log('ok');
        } else {
            console.log(res);    
        }
    }
    //y si por algun motivo no puedes hacerlo
    catch(error){
        console.log(error);    
    }
}