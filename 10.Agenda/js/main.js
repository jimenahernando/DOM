import { Contact } from "../classes/Contact.js";

class App {
  contacts = [];

  form = document.querySelector("form");
  userName = document.querySelector("#userName");
  phoneNumber = document.querySelector("#phone-number");
  button = document.querySelector("button");
  tbody = document.querySelector("tbody");

  currentId = null;
  constructor() {
    this.getLocaleStorage();
    this.paintContacts();
    this.form.addEventListener("submit", (event) => this.handleSubmit(event));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { userName, phoneNumber } = this.getFormValues();

    if (!userName || !phoneNumber) {
      console.error(`Complete los datos`);
      return;
    }

    const contact = new Contact(userName, phoneNumber);
    if (this.currentId) {
      this.updateContact(contact);
    } else {
      this.addContact(contact);
    }
    this.paintContacts();
        this.updateLocaleStorage();

    this.form.reset();
    this.userName.select();
  }

  getFormValues() {
    const userName = this.userName.value;
    const phoneNumber = this.phoneNumber.value;
    return { userName, phoneNumber };
  }

  addContact(contact) {
    this.contacts.push(contact);
    const tr = this.createTr(contact);
    this.tbody.appendChild(tr);
  }

  updateContact(newContact) {
    console.log(this.currentId);
    this.contacts = this.contacts.map((contact) => {
        return contact.id === this.currentId ? newContact : contact;
    });
    console.log(this.contacts);
    this.button.innerText = 'Submit';
    this.currentId = null;
  }

  createTr({ id, userName, phoneNumber }) {
    const tr = document.createElement("tr");

    const tdUserName = this.createTd(userName);
    const tdPhoneNumber = this.createTd(phoneNumber);
    const tdActions = this.createTdActions(id);

    tr.append(tdUserName, tdPhoneNumber, tdActions);
    return tr;
  }

  createTdActions(id) {
    const tdActions = document.createElement("td");
    tdActions.classList.add("actions");

    const iUpdate = this.createTdIcon("fa-pencil-alt");
    iUpdate.addEventListener("click", (event) => this.editContact(id));
    const iDelete = this.createTdIcon("fa-trash");
    iDelete.addEventListener("click", (event) => this.removeContact(id));
    tdActions.append(iUpdate, iDelete);
    return tdActions;
  }

  editContact(id) {
    const contact = this.contacts.find((contact) => contact.id === id);
    const { userName, phoneNumber } = contact;
    this.userName.value = userName;
    this.phoneNumber.value = phoneNumber;
    this.button.innerText = "Edit";
    this.currentId = id;
  }

  removeContact(id) {
    const confirmed = confirm(`Are you sure????`);
    if (confirmed) {
      this.contacts = this.contacts.filter((contact) => contact.id !== id);
      this.updateLocaleStorage();
      this.paintContacts();
    }
  }

  createTdIcon(className) {
    const i = document.createElement("i");
    i.classList.add("fas", className);
    return i;
  }

  createTd(value) {
    const tdUserName = document.createElement("td");
    tdUserName.innerText = value;
    return tdUserName;
  }

  paintContacts() {
    this.tbody.innerHTML = "";
    this.contacts.forEach((contact) => {
      const tr = this.createTr(contact);
      this.tbody.appendChild(tr);
    });
  }

  updateLocaleStorage() {
    const jsonContacts = JSON.stringify(this.contacts);
    localStorage.setItem("CONTACTS", jsonContacts);
  }

  getLocaleStorage() {
    const jsonContacts = localStorage.getItem("CONTACTS");
    if (!jsonContacts) {
      return;
    }
    const parsedContacts = JSON.parse(jsonContacts);
    this.contacts = parsedContacts;
  }
}

new App();
