import {observable, action} from "mobx";
import Counter from "./Counter";

export default class Player {
  @observable name = "";
  @observable life = new Counter(20);
  @observable poison = new Counter(0);
  @observable commanderDamage = new Counter(20);

  constructor({id, name="", life=20}={}) {
    this.id = id;
    this.name = name;
    this.life.setCount(life);
  }

  @action setName(name) {
    this.name = name;
  }
}
