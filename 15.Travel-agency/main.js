import { Destination } from "./classes/Destination.js";
class App{
    destinations = [];
    main = document.querySelector('main');
    form = document.querySelector('form');

    constructor(){
        this.getData();
        this.form.addEventListener('submit', (event) => this.addDestination(event));
    }

    getData(){
        //para que se conecte a la appi
        fetch('https://api-coches.herokuapp.com/travels/')
        .then(res => res.json())
        .then((json) => { 
            this.destinations = json.map((dest) => {
                const destination = new Destination(dest.id, dest.name, dest.destination, dest.img , dest.type, dest.rating)
                destination.deleteButton.addEventListener('click', () => this.removeDestination(destination.id));
                return destination;
            });
            // console.log(this.destinations);
            this.paintDestinations(this.destinations);
        });
    }

    paintDestinations(array){
        this.main.innerHTML = '';
        array.forEach((destination) => this.main.appendChild(destination.card));
    }

    removeDestination(id){
        //para borrar un elemento del api
        fetch(`https://api-coches.herokuapp.com/travels/${id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                this.getData()
            } else {
                alert('Something went wrong..');
            }        
        })
    }

    addDestination(event){
        event.preventDefault();
        console.log(event);
        console.log(event.target);
        const [destName, place, type, img] = event.target.elements;
        console.log(destName, place, type, img);
        console.log(destName.value, place.value, type.value, img.value);
    }
}

new App();