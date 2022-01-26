import {makeAutoObservable} from "mobx"

class Clients {

    height = ""
    weight = ""
    sex = ""
    birthday_date = ""
    calculate = false
    policeId = 0
    duration = 0
    premium = 0
    startDate = new Date()
    endingDate;
    complete = false;
    policySelected = false

    constructor() {
        makeAutoObservable(this)
    }

    heightChange(event) {
        this.height = +event.target.value;
        console.log("Рост изменился на" + this.height);
        this.calculate = false;
        this.clearData()
    }

    weightChange(event) {
        this.weight = +event.target.value;
        console.log("Вес изменился на" + this.weight);
        this.calculate = false;
        this.clearData()
    }

    sexChange(event) {
        this.sex = event.target.value;
        console.log("Пол изменился на" + this.sex);
        this.calculate = false;
        this.clearData()
    }

    dateChange(event) {
        this.birthday_date = event.target.value;
        console.log("Дата изменился на" + this.birthday_date);
        this.calculate = false;
        this.clearData()
    }

    changeFlagCalculate() {
        console.log(this.calculateBmi, this.calculateAge);
        this.calculate = true;
    }
    changeFlagSelected() {
        this.policySelected ? this.policySelected = false: this.policySelected = false;

    }
    selectedPolice(police) {
        this.policeId = police.id
        this.premium = police.premia
        this.duration = police.min
        this.policySelected = !this.policySelected
        console.log("Селектор равен ", this.policeId, this.premium);
    }

    durationChange(event) {
        this.duration = parseInt(event.target.value)
        console.log("Длительность изменилась на" + this.duration);
        console.log("Полная страховка изменилась на" + this.fullPremium);
    }

    startDateChange(event) {
        this.startDate = new Date(event.target.value)
        console.log("Дата начала изменилась на - "   + event.target.value + " " + this.startDate);
        this.complete = true;
    }

    clearData() {
        this.calculate = false
        this.policeId = null
        this.duration = null
        this.premium = null
        this.startDate = new Date()
        this.endingDate = new Date()
        this.complete = false;
        this.policySelected = false;
    }

    get calculateBmi() {      
        return Math.floor(this.weight / (this.height/100 * this.height/100)) 
    }

    get calculateAge() {      
        return 20 
    }

    get calculateFullPremium() {
        return this.duration * this.premium
    }

    get calculateEndingDate() {
        let newDate = this.startDate
        console.log("До setmonth startdate" + this.startDate);
        console.log("ДлителНГСЬ" + this.duration);
        console.log("До setmonth" + newDate);
        newDate.setMonth(newDate.getMonth() + parseInt(this.duration))
        console.log("neaDte = " + newDate);
        let date = newDate.toLocaleString('ru',
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).split(".").reverse().join("-");
        console.log(date);
        return date
    }

}

export default new Clients()