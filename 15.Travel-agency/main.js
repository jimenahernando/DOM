import { Destination } from "./classes/Destination.js";
class App{
        main = document.querySelector('main');
    form = document.querySelector('form');
    button = document.querySelector('button');
    
    destinations = [];
    currentId = null;

    constructor(){
        this.getData();
        //cogemos los inputs
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    async getData(){
        try{
            //para que se conecte a la appi
            const res = await fetch('https://api-coches.herokuapp.com/travels/');
            const json = await res.json(); 
            this.destinations = json.map((dest) => {
                const destination = new Destination(dest.id, dest.name, dest.destination, dest.img , dest.type, dest.rating)
                destination.deleteButton.addEventListener('click', () => this.removeDestination(destination.id));
                destination.editButton.addEventListener('click', () => this.editDestination(destination));
                return destination;
            });
            // console.log(this.destinations);
            this.paintDestinations(this.destinations);
        } catch(error) {
            console.log(`Something went wrong`);
        }
    }

    paintDestinations(array){
        this.main.innerHTML = '';
        array.forEach((destination) => this.main.appendChild(destination.card));
    }

    async removeDestination(id){
        try{
            //para borrar un elemento del api
            const res = fetch(`https://api-coches.herokuapp.com/travels/${id}`, {
                method: 'DELETE'
            })
            if(res.ok){
                this.getData()
            } else {
                alert('Something went wrong..');
            }        
        } catch (error) {
            console.log(`Something went wrong`);
        }
    }

    handleSubmit(event){
        event.preventDefault();
        //desestruturacion de un array
        const [destName, place, type, img] = event.target.elements;
        console.log(destName.value, place.value, type.value, img.value);
        const newDestination = {
            name: destName.value,
            destination: place.value,
            type: type.value,
            img: img.value
        }
        if(this.currentId){
            this.updateDestination(newDestination);
        } else {
            this.addDestination(newDestination);
        }

    }

    async addDestination(newDestination){
        try{
            const res = await fetch('https://api-coches.herokuapp.com/travels/', {
                method: 'POST',
                body: JSON.stringify(newDestination),
                headers: {
                    'Content-Type' : 'application/json',
                }
            })
        // .then(console.log);
        
            if(res.ok){
                this.getData();
            } else {
                alert ('Something went wrong');
            }
        } catch (error){
            console.log(`Something went wrong`);
        }

    }

    async updateDestination(newDestination){
        try{
            const res = await fetch(`https://api-coches.herokuapp.com/travels/${this.currentId}`, {
                method: 'PUT',
                body: JSON.stringify(newDestination),
                headers: {
                    'Content-Type' : 'application/json',
                }
            });
            
            if(res.ok){
                this.getData();
            } else {
                alert ('Something went wrong');
            }
        } catch(error){
            console.log(`Something went wrong`);
        }
        this.currentId = null;
        this.form.reset();
        this.button.innerText = 'Save';
    }

    editDestination(destination){
        const [destName, place, type, image] = this.form.elements;
        destName.value = destination.destName;
        place.value = destination.place;
        type.value = destination.type;
        image.value = destination.img;
        this.button.innerText = 'Edit';
        this.currentId = destination.id;
        console.log(this.currentId);
    }
}

new App();