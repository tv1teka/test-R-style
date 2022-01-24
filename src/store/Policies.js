import {makeAutoObservable} from "mobx"

class Policies {
    constructor() {
        makeAutoObservable(this)
    }

    // bmi() {
    //     result = m/h(metr)*2
    // }

    Data =  [
        {
            id:1,
            name:"Защита здоровья ПЛЮС",
            min:12,
            max:24,
            premia:2400,
            sum:200000,
            low:18.0,
            high:25.0,
            min_age:18,
            max_age:65,
            risks:["Смерть по любой причине", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:2,
            name:"Защита здоровья ПЛЮС",
            min:12,
            max:24,
            premia:2400,
            sum:200000,
            low:25.0,
            high:35.0,
            min_age:18,
            max_age:65,
            risks:["Смерть по любой причине", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:3,
            name:"Защита здоровья",
            min:12,
            max:24,
            premia:1000,
            sum:100000,
            low:18.0,
            high:25.0,
            min_age:18,
            max_age:65,
            risks:["Смерть в результате несчастного случая", "Инвалидность I, II, или II степени по любой причине"]
        },

        {
            id:4,
            name:"Защита здоровья",
            min:12,
            max:24,
            premia:1200,
            sum:100000,
            low:25.0,
            high:35.0,
            min_age:18,
            max_age:65,
            risks:["Смерть в результате несчастного случая", "Инвалидность I, II, или II степени по любой причине"]
        }
    ]
}

export default new Policies()