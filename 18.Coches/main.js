import { Car } from "./classes/Car.js";
class App{
    
    form = document.querySelector('form');
    main = document.querySelector('main');
    button = document.querySelector('aside button');
    cars = [];
    currentId = null;
    url = 'https://api-coches.herokuapp.com/cars/';

    constructor(){
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
        this.getData();
    }

    handleSubmit(event){
        event.preventDefault();
        try {
            this.validateInputs();
        } catch (error) {
            alert(error);
        }
        const newCar = this.getFormValues(event.target.elements);

        if(this.currentId){
            this.updateCar(newCar);
        } else {
            this.addCar(newCar);
        }
    }

    validateInputs() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach((element) => {
            if (!element.value) {
                throw new Error(`Invalid from values`);
            }
        });
    }

    async addCar(car){
        const options = this.createOptions('POST', car);
        try{
            const res = await fetch(this.url, options);
            if(!res.ok){
                alert(`Something went wrong`)
            } else {
                this.getData();
                this.form.reset;
            }
        } catch (error){
            console.log(error);
        }
    }

    async getData(){
        try{
            //solo se pone el await cuando devuelve una promesa, para esperarte
            const res = await fetch(this.url);
            const data = await res.json();
            //lo modifica porque devuelve 
            this.cars = data.map((car) => this.createCars(car));
            this.paintCars();
        }catch (error){
            console.log(error);
        }
        
    }

    async removeCar(id){
        const options = this.createOptions('DELETE');
        try{
            const res = await fetch (`${this.url}${id}`, options);
            if(!res.ok){
                alert(`Something went wrong`);
            } else {
                this.getData();
            }
        } catch (error){
            console.log(error)
        }
    }

    async updateCar(car){
        const options = this.createOptions('PUT', car)
        try {
            const res = await fetch(`${this.url}${this.currentId}`, options);
            if(!res.ok){
                alert(`Something went wrong`);
            } else {
                this.getData();
            }
        }catch (error) {  
            this.currentId = null;
        }
        this.form.reset;
        this.button.innerText = 'Save';
    }
    handleEditCar(car){
        const [make, model, type, price, img] = this.form.elements;
        console.log(this.form.elements)
        make.value = car.make;
        model.value = car.model;
        type.value = car.type;
        price.value = car.price;
        img.value = car.img;
        this.currentId = car.id;
        this.button.innerText = 'Edit';
    }

    createCars(car){
        const newCar = new Car(car);
        newCar.deleteButton.addEventListener('click', () => this.removeCar(car.id));
        newCar.editButton.addEventListener('click', () => this.handleEditCar(car));
        return newCar;
    }

    paintCars(){
        this.main.innerHTML= '';
        this.cars.forEach((car) => this.main.appendChild(car.card));
    }
    
    getFormValues(elements){
        const [make, model, type, price, img] =  elements;
        const newCar = {
            make: make.value,
            model: model.value,
            type: type.value,
            price: price.value,
            img: img.value
        }
        return newCar;
    }

    createOptions(method, body){
        const options = { 
            //si lo que se asigna es igual a dodne se asigna 
            // method: method,
            method,
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }
        return options;
    }
}

new App();