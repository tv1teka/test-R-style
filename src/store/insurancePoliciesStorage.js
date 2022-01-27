import {makeAutoObservable} from "mobx"


class insurancePoliciesStorage {

    constructor() {
        makeAutoObservable(this)
    }

    Data =  [
        {
            id:1,
            name:"Защита здоровья ПЛЮС",
            minMonth:12,
            maxMonth:24,
            premium:2400,
            insuredSum:200000,
            lowBmi:18.0,
            highBmi:25.0,
            minAge:18,
            maxAge:65,
            risks:["Смерть по любой причине", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:2,
            name:"Защита здоровья ПЛЮС",
            minMonth:12,
            maxMonth:24,
            premium:2400,
            insuredSum:200000,
            lowBmi:25.0,
            highBmi:35.0,
            minAge:18,
            maxAge:65,
            risks:["Смерть по любой причине", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:3,
            name:"Защита здоровья",
            minMonth:12,
            maxMonth:24,
            premium:1000,
            insuredSum:100000,
            lowBmi:18.0,
            highBmi:25.0,
            minAge:18,
            maxAge:65,
            risks:["Смерть в результате несчастного случая", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:4,
            name:"Защита здоровья",
            minMonth:12,
            maxMonth:24,
            premium:1200,
            insuredSum:100000,
            lowBmi:25.0,
            highBmi:35.0,
            minAge:18,
            maxAge:65,
            risks:["Смерть в результате несчастного случая", "Инвалидность I, II, или II степени по любой причине"]
        }   
    ]
    
    filterPoliciesByBmiAndAge = (bmi, age) => {
        return this.Data.filter(police => police.lowBmi <= bmi && police.highBmi >= bmi
            && police.minAge <= age && police.maxAge >= age)
    }

    filterPoliciesById = (id) => {
        return this.Data.filter(police => police.id === id)
    }
}

export default new insurancePoliciesStorage()