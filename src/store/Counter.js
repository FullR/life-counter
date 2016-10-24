import {observable, action} from "mobx";

export default class Counter {
  @observable value = 0;

  constructor(initialValue) {
    this.value = initialValue;
  }

  @action setCount = (value) => {
    if(typeof value === "number") {
      this.value = value;
    }
  };

  @action add = (amount=1) => {
    this.value += amount;
  };

  @action subtract = (amount=1) => {
    this.value -= amount;
  };

  @action increment = (amount=1) => {
    this.add(1);
  };

  @action decrement = (amount=1) => {
    this.subtract(1);
  };
}
