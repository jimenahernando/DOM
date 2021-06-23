export class Contact {
    constructor(userName, phoneNumber){
        this.id = `${userName[0]}_${Math.round(Math.random() * 10000)}`;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
    }
}