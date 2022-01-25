import {makeAutoObservable} from "mobx"

class Clients {

    height = ""
    weight = ""
    sex = ""
    birthday_date = ""
    calculate = false
    selected = 0
    duration = 0
    premium = 0
    fullPremium = 0
    startDate = new Date()
    endingDate = new Date()
    complete = false;

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

    durationChange(event, premium) {
        this.duration = event.target.value
        this.fullPremium = this.duration * premium
        console.log("Длительность изменилась на" + this.duration);
        console.log("Полная страховка изменилась на" + this.calculateFullPremium);
    }

    get calculateFullPremium() {
        return this.fullPremium = this.duration * this.premium
    }

    get policeId() {
        return !!this.selected
    }

    selectedPolice(police) {
        console.log("Полученный полис = " + police);
        this.selected = police.id
        this.premium = police.premia
        this.duration = (police.min + police.max)/2
        console.log("Селектор равен ", this.selected, this.premium);
    }

    startDateChange(event) {
        this.startDate = new Date(event.target.value)
        console.log("Дата начала изменилась на - "   + event.target.value + " " + this.startDate);
        this.complete = true;
    }

    get calculateEndingDate() {
        // this.endingDate = this.startDate.setMonth(this.startDate.getMonth()+12)
        // console.log("EndDate - " + this.endingDate);
        // // endDate.toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });

        // this.Date = this.endingDate.toLocaleString('ru',
        // {
        //     year: 'numeric',
        //     month: 'numeric',
        //     day: 'numeric'
        // }).split(".").reverse().join("-");
        // console.log("EndDate2 - " + this.Date);
        // // let text = this.startDate.getFullYear() + '-' + (this.startDate.getMonth()+1)  + '-' + this.startDate.getDate( );
        // // console.log(text);
        // return this.Date
    }

}

export default new Clients()