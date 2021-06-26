export class Car{
    card = document.createElement('div');
    deleteButton = document.createElement('button');
    editButton = document.createElement('button');

    constructor(car){
        this.id = car.id || '';
        this.model = car.model || '';
        this.type = car.type || '';
        this.price = car.price || 0;
        this.img = car.img || 'https://images.unsplash.com/photo-1579451487601-8c41bb1a261d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwYnJva2VufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
        this.createCard();
    }
    
    createCard(){
        this.card.classList.add('card');
        const title = this.createH3(this.model);
        const img = this.createImage(this.img);
        const type = this.createParagraph(this.type);
        const price = this.createParagraph(this.price + 'E');
        this.deleteButton.innerText = 'Delete';
        this.editButton.innerText = 'Edit';
        this.editButton.style.marginRight = '1rem';
        this.card.append(title, img, type, price, this.editButton, this.deleteButton);
    }

    createParagraph(text){
        const p = document.createElement('p')
        p.innerText = text;
        return p;
    }
    
    createH3(text){
        const h3 = document.createElement('h3')
        h3.innerText = text;
        return h3;
    }
    
    createImage(src){
        const img = document.createElement('img')
        img.src = src;
        return img;    
    }
}