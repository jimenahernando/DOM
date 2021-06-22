import { Musician } from "../classes/Musician.js";

class App{
    musicians = [];
    
    //Tomo del HTML
    form = document.querySelector('form');
    inputName = document.querySelector('#name');
    instrument = document.querySelector('#instrument');
    rating = document.querySelector('#rating');
    table = document.querySelector('tbody');
    button = document.querySelector('button');
    nameCol = document.querySelector('#name-col');
    instrumentCol = document.querySelector('#instrument-col');
    ratingCol = document.querySelector('#rating-col');
    
    //variables auxiliares
    count = 1;
    currentInd = null;

    constructor(){
        this.form.addEventListener('submit', (event) => this.handleSubmit(event));
        this.nameCol.addEventListener('click', () => this.sortColumn('name', 'nameCol'));
        this.instrumentCol.addEventListener('click', () => this.sortColumn('instrument', 'instrumentCol'));
        this.ratingCol.addEventListener('click', () => this.sortColumn('rating', 'ratingCol'));
    }

    sortColumn(param, element){
        //parametro de ordenacion
        //elemento al cual le queremos poner el underline
        this.sortBy(param);
        this.removeUnderline();
        this[element].style.textDecoration = 'underline';
    }

    removeUnderline(){
        this.nameCol.style.textDecoration = 'none';
        this.instrumentCol.style.textDecoration = 'none';
        this.ratingCol.style.textDecoration = 'none';
    }

    sortBy(param){
        this.musicians.sort((a,b) => a[param].toLowerCase() < b[param].toLowerCase() ? -1 : 1);
        this.paintMusicians();
    }

    handleSubmit(event){
        //evita que se recarguela pagina al hacer clic en el boton 
        event.preventDefault();
       
        //obtengo los valores ingresados del formulario
        //destructuring
        const { name, instrument, rating } = this.getFormValues()
        
        //validacion
        if(!name || !instrument){
            console.error(`Debe completar los campos`);
            return;
        }
        
        if(this.currentId){
            //creo el musician
            const newMusician = new Musician(this.currentId, name, instrument, rating);
            
            //edito el musico
            this.updateMusician(newMusician);
        
        } else {
            //creo el musician
            const musician = new Musician(this.count++, name, instrument, rating);
            
            //agrego el musician al array
            this.addMusician(musician);
        }

        //para que limpie
        this.form.reset();

        //para que tome el foco el primer input
        this.inputName.select();
    }
    
    addMusician(musician) {
        this.musicians.push(musician);

        //creo el musico
        const tr = this.createMusicianTr(musician);

        //agrego el row creado a la tabla
        this.table.appendChild(tr);
    }

    updateMusician(newMusician) {
        this.musicians = this.musicians.map((musician) => {
            return musician.id === this.currentId ? newMusician : musician;
        });
        this.paintMusicians();
        this.button.innerText = 'Submit';
        this.currentId = null;
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
        const { iEdit, iTrash } = this.createOperationsIcons(id);
        tdOperations.append(iEdit, iTrash);
        return tdOperations;
    }

    createOperationsIcons(id) {
        //iconos
        // trOperations.innerHTML = '<button><i class="far fa-edit"></i></button><button><i class="far fa-trash-alt"></i></button>'
           
        const iEdit = this.createIcon('fa-pencil-alt');
        const iTrash = this.createIcon('fa-trash');
        iTrash.addEventListener('click', () => this.removeMusician(id));
        iEdit.addEventListener('click', () => this.editMusician(id));
        return { iEdit, iTrash };
    }

    createMusicianTr({ id, name, instrument, rating}){
         //creo la fila
         const tr = document.createElement('tr');
            
         //creo cada celda
         const tds = this.createMusicianTds(name, instrument, rating, id);
         const { tdName, tdInstrument, tdRating, tdOperations } = tds;
        
         //para colocar multiples hijos
         tr.append(tdName, tdInstrument, tdRating, tdOperations);
         return tr;
    }

    createMusicianTds(name, instrument, rating, id) {
        const tdName = this.createTdWithText(name);
        const tdInstrument = this.createTdWithText(instrument);
        const tdRating = this.createTdWithText(rating);
        const tdOperations = this.createOperationsTd(id);
        return { tdName, tdInstrument, tdRating, tdOperations };
    }

    removeMusician(id){
        const confirmed = confirm(`Are you sure????`);
        if(confirmed){
            this.musicians = this.musicians.filter((musician) => musician.id !== id);
            this.paintMusicians();
        }
    }

    editMusician(id){
        const musician = this.musicians.find((musician) => musician.id === id);
        const {name, instrument, rating } = musician;
        //no comprueba que lo encuentre porque sino no podria haberle hecho clic
        this.inputName.value = name;
        this.instrument.value = instrument;
        this.rating.value = rating;
        this.currentId = id;
        this.button.innerText = 'Edit';
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