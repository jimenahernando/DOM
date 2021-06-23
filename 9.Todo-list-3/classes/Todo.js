export class Todo {
    isCompleted = false;
    constructor(text){
        this.id = `${text[0]}_${Math.round(Math.random() * 10000)}`;
        this.text = text;
    }
}