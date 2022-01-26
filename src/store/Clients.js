import {makeAutoObservable} from "mobx"

class Clients {

    height = ""
    weight = ""
    gender = ""
    birthday_date = ""

    policyId = null
    policyName = ""
    duration = null
    premium = null
    startDate = new Date()
    endingDate;

    calculate = false
    complete = false;
    policySelected = false;

    checkedId = ""

    data = {
        policyName: "",
        policyDuration: "",
        policyPremium: "",
        fullInsurancePremium: 0,
        policyStartDate: null,
        policyEndingDate: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    setHeight(value) {
        this.height = +value;
        this.clearData()
    }

    setWeight(value) {
        this.weight = +value;
        this.clearData()
    }

    setGender(value) {
        this.gender = value;
        this.clearData()
    }

    setBirthdayDate(value) {
        this.birthday_date = value;
        this.clearData()
    }

    changeCalculateFlag() {
        this.calculate = true;
    }

    changeCheckedFlag(id) {
        if(id == this.checkedId) {
            return true
        } else {
            return false
        }
    }

    setPolicy(event,policy) {
        this.checkedId = event.target.value;
        this.policySelected = true

        if (this.checkedId === policy.id) {
            event.target.checked = true
        } else {
            this.policyId = policy.id
            this.policyName = policy.name
            this.premium = policy.premium
            this.duration = policy.min
        }
    }

    setDuration(value) {
        this.duration = parseInt(value)
    }

    setStartDate(value) {
        this.startDate = new Date(value)
        this.complete = true;
    }

    clearData() {
        this.calculate = false
        this.policyId = null
        this.duration = null
        this.premium = null
        this.startDate = new Date()
        this.endingDate = new Date()
        this.complete = false;
        this.policySelected = false;
        this.checkedId = "";
    }

    setInsuranceData() {
        this.data.policyName = this.policyName;
        this.data.policyDuration = this.duration;
        this.data.policyPremium = this.premium;
        this.data.fullInsurancePremium = this.calculateFullPremium;
        this.data.policyStartDate = this.startDate;
        this.data.policyEndingDate = this.calculateEndingDate;

        console.log("Название полиса: " + this.data.policyName);
        console.log("Длительность полиса: " + this.data.policyDuration);
        console.log("Страховая премия в месяц: " + this.data.policyPremium);
        console.log("Общая страховая премия: " + this.data.fullInsurancePremium);
        console.log("Дата начала действия полиса: " + this.data.policyStartDate);
        console.log("Дата окончания действия полиса: " + this.data.policyEndingDate);
    }

    get calculateBmi() {      
        return parseFloat(Math.floor(this.weight / (this.height/100 * this.height/100)))
    }

    get calculateAge() {      
        return 20 
    }

    get calculateFullPremium() {
        return this.duration * this.premium
    }

    get calculateEndingDate() {
        let startDate = this.startDate
        this.endingDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        this.endingDate.setMonth(startDate.getMonth() + parseInt(this.duration))
        let endingDate = this.endingDate.toLocaleString('ru',
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).split(".").reverse().join("-");
        return endingDate
    }

}

export default new Clients()