/** 
 * FETCH nos permite desde JavaScript conectarme a internet
 * y hacer una petición http
*/
const albums = fetch('https://jsonplaceholder.typicode.com/photos')
.then((response) => response.json())
.then((data) => paintPosts(data));

const paintPosts = (array) => {
    array.forEach((photo) => {
        const p = document.createElement('p');
        const img = document.createElement('img');
        p.innerText = photo. title;
        img.src = photo.url;
        document.body.appendChild(p);
        document.body.appendChild(img);
    });
}

//ejemplo de servidor que no esta preaparado apra devolver nada, no es una api
// const albums = fetch('https://google.es')
// .then((response) => response.json())
// .then((data) => console.log(data))
// .catch((error) => console/log(error));

