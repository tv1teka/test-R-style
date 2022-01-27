import {makeAutoObservable} from "mobx"

class InsuranceDataStorage {

    height = ""
    weight = ""
    gender = ""
    birthday_date = ""

    calculate = false

    data = {
        policyId: null,
        policyName: null,
        policyDuration: null,
        policyPremium: null,
        policyInsuredSum: null,
        policyFullInsurancePremium: null,
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

    policySelected(id) {
        console.log(typeof(id) + " " + typeof(this.data.policyId));
        if(id === this.data.policyId) {
            return true
        } else {
            return false
        }
    }

    setPolicy(policy) {
        this.data.policyId = policy.id
        this.data.policyName = policy.name
        this.data.policyPremium = policy.premium
        this.data.policyInsuredSum = policy.insuredSum
        this.data.policyDuration = policy.minMonth
        this.data.policyStartDate = null
    }

    setDuration(value) {
        this.data.policyDuration = parseInt(value)
    }

    setStartDate(value) {
        this.data.policyStartDate = new Date(value)
    }

    clearData() {
        this.calculate = false
        this.data.policyId = null
        this.data.policyDuration = null
        this.data.policyPremium = null
        this.data.policyStartDate = null
        this.data.policyEndingDate = null
    }

    setInsuranceData() {

        this.data.fullInsurancePremium = this.calculateFullPremium
        this.data.policyEndingDate = this.calculateEndingDate;

        console.log("Название полиса: " + this.data.policyName);
        console.log("Длительность полиса: " + this.data.policyDuration);
        console.log("Страховая премия в месяц: " + this.data.policyPremium);
        console.log("Страховая сумма: " + this.data.policyInsuredSum);
        console.log("Общая страховая премия: " + this.data.fullInsurancePremium);
        console.log("Дата начала действия полиса: " + this.data.policyStartDate);
        console.log("Дата окончания действия полиса: " + this.data.policyEndingDate);
    }

    get calculateBmi() {      

        return parseFloat(  (this.weight / (this.height/100 * this.height/100)).toFixed(1)  )
    }

    get calculateAge() {      
        return 20 
        // let date = this.birthday_date;
        // let age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;   
        // return age    
    }

    get calculateFullPremium() {
        return this.data.policyDuration * this.data.policyPremium
    }

    get calculateCurrentDate() {
        return new Date().toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric'}).split(".").reverse().join("-")
    }

    get fullnessСheck() {
        if (this.data.policyStartDate == null) {
            return false
        } else {
            return true
        }
    }

    get calculateEndingDate() {
        if(this.data.policyStartDate !== null) {

            let startDate = this.data.policyStartDate
            let endingDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

            endingDate.setMonth(startDate.getMonth() + parseInt(this.data.policyDuration))
            endingDate = endingDate.toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric'}).split(".").reverse().join("-")

            return endingDate
        } else {
            return ""
        }
    }

}

export default new InsuranceDataStorage()