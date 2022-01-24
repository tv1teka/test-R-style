import { makeAutoObservable } from "mobx";

class Store {

    count = 0;
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count = this.count + 1
        console.log("+");
    }
    decrement() {
        this.count = this.count - 1
        console.log("-");
    }
}

export default new Store();