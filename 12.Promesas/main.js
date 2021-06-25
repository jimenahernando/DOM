//CALLBACK HELL

console.log(`START`);

const getData = () => {
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(Math.random() > 0.5){
            console.log(`CONECTARME CON EL SERVIDOR`)
            console.log(`BUSCAR EN LA BASE DE DATOS`)
            console.log(`FILTRAR LOS DATOS`)
            console.log(`DEVOLVER DATOS AL USUARIO`)
            console.log(`PINTAR EN LA PAGINA`)
            resolve();
        } else {
            reject(new Error('Something went wrong'));
        }
    }, 2000);
  });
}

getData()
    .then(() => console.log(`END`))
    .catch((error) => console.log(error))
    .finally(() => console.log(`BYEBYE`));

console.log(`END`);



