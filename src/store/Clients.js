import {makeAutoObservable} from "mobx"

class Clients {

    height = ""
    weight = ""
    sex = ""
    birthday_date = ""
    result = [];
    calculate = false;

    constructor() {
        makeAutoObservable(this)
    }

    heightChange(event) {
        this.height = +event.target.value;
        console.log("Рост изменился на" + this.height);
        this.calculate = false;
    }

    weightChange(event) {
        this.weight = +event.target.value;
        console.log("Вес изменился на" + this.weight);
        this.calculate = false;
    }

    sexChange(event) {
        this.sex = event.target.value;
        console.log("Пол изменился на" + this.sex);
        this.calculate = false;
    }

    dateChange(event) {
        this.birthday_date = event.target.value;
        console.log("Дата изменился на" + this.birthday_date);
        this.calculate = false;
    }

    formSubmit(event) {
        console.log(this.calculateBmi, this.calculateAge);
        event.preventDefault();
        this.calculate = true;
    }

    get calculateBmi() {      
        return Math.floor(this.weight / (this.height/100 * this.height/100)) 
    }

    get calculateAge() {      
        return 20 
    }
}

export default new Clients()