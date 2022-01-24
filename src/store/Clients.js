import {makeAutoObservable} from "mobx"

class Clients {

    constructor() {
        makeAutoObservable(this)
    }

    height = ""
    weight = ""
    sex = ""
    birthday_date = ""


        heightChange(event) {
            this.height = event.target.value;
            console.log("Рост изменился на" + this.height);
        }
        weightChange(event) {
            this.weight = event.target.value;
            console.log("Вес изменился на" + this.weight);
        }
        sexChange(event) {
            this.sex = event.target.value;
            console.log("Пол изменился на" + this.sex);
        }
        dateChange(event) {
            this.birthday_date = event.target.value;
            console.log("Дата изменился на" + this.birthday_date);
        }

        formSubmit(event) {
            alert(this.calculateBmi);
            event.preventDefault();
        }

        get calculateBmi() {         
            return this.weight / (this.height * this.height)  
         }
}

export default new Clients()