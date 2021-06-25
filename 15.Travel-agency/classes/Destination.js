export class Destination{
    card = document.createElement('div');
    deleteButton = document.createElement('button');
    editButton = document.createElement('button');
    
    constructor(id, destName, place, img, type, rating){
        this.id = id;
        this.destName = destName;
        this.place = place;
        this.img = img;
        this.type = type;
        this.rating = rating;
        this.createCard();
        this.createEditButton();
        this.createDeleteButton();
    }

    createCard(){
        this.card.classList.add('card');
        const h3 = document.createElement('h3');
        h3.innerText = this.destName;
        const img = document.createElement('img');
        img.src = this.img;
        const place = document.createElement('p');
        place.innerText = this.place;
        const type = document.createElement('p');
        type.innerText = this.type;
        this.card.append(h3, img, place, type, this.editButton, this.deleteButton);
    }

    createDeleteButton(){
        this.deleteButton.innerText = 'Delete';
    }
    createEditButton(){
        this.editButton.innerText = 'Edit';
        this.editButton.style.marginRight = '0.5rem';
    }

}