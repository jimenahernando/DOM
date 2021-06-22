import { Musician } from "../classes/Musician.js";

class App{
    musicians = [];
    
    form = document.querySelector('form');
    inputName = document.querySelector('#name');
    instrument = document.querySelector('#instrument');
    rating = document.querySelector('#rating');
    table = document.querySelector('tbody');
    count = 1;

    constructor(){
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
    }

    handleSubmit(event){
        //evita que se recarguela pagina al hacer clic en el boton 
        event.preventDefault();
       
        //obtengo los valores ingresados del formulario
        //destructuring
        const { name, instrument, rating } = this.getFormValues()

        //creo el musician
        const musician = new Musician(this.count++, name, instrument, rating);
        
        //validacion
        if(!name || !instrument){
            console.error(`Debe completar los campos`);
            return;
        }

        //agrego el musician al array
        this.musicians.push(musician);

        //creo el musico
        const tr = this.createMusicianTr(musician);
        
        //agrego el row creado a la tabla
        this.table.appendChild(tr);

        //para que limpie
        this.form.reset();
        //para que tome el foco
        this.inputName.select();
    }
    
    getFormValues(){
        const name = this.inputName.value;
        const instrument = this.instrument.value;
        const rating = this.rating.value;
        return { name, instrument, rating }; 
    }

    createIcon(className){
        const i = document.createElement('i');
        i.classList.add('fas', className);
        return i;
    }
    
    createTdWithText(text){
        const td = document.createElement('td');
        td.innerText = text;
        return td;
    }

    createOperationsTd(id){
        //creo el td
        const tdOperations = document.createElement('td');
        
        //agrego la clase que tiene estilos en css
        tdOperations.classList.add('actions');
                    
        //iconos
        // trOperations.innerHTML = '<button><i class="far fa-edit"></i></button><button><i class="far fa-trash-alt"></i></button>'
           
        const iEdit = this.createIcon('fa-pencil-alt');
        const iTrash = this.createIcon('fa-trash');
        iTrash.addEventListener('click', () => this.removeMusician(id));
        tdOperations.append(iEdit, iTrash);
        return tdOperations;
    }

    createMusicianTr({ id, name, instrument, rating}){
         //creo la fila
         const tr = document.createElement('tr');
            
         //creo cada celda
         const trName = this.createTdWithText(name);
         const trInstrument = this.createTdWithText(instrument);
         const trRating = this.createTdWithText(rating);
         const tdOperations = this.createOperationsTd(id);
        
         //para colocar multiples hijos
         tr.append(trName, trInstrument, trRating, tdOperations);
         return tr;
    }

    removeMusician(id){
        this.musicians = this.musicians.filter((musician) => musician.id !== id);
        this.paintMusicians();
    }

    paintMusicians(){
        this.table.innerHTML = '';
        this.musicians.forEach((musician) => {
            const tr = this.createMusicianTr(musician);
            this.table.appendChild(tr);
        });
    }
}

const app  = new App()
console.log(app);

// const stephane = new Musician(1,'Stephane Gillespie', 'Piano', 5);
// console.log(stephane);