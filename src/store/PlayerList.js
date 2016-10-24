import {uniqueId} from "lodash";
import {observable, action} from "mobx";
import Player from "./Player";

export default class PlayerList {
  @observable players = [];

  @action addPlayer = () => {
    const player = new Player({
      id: uniqueId("player"),
      name: `Player ${this.players.length + 1}`
    });
    this.players.push(player);
  };

  @action removePlayer = (playerId) => {
    this.players = this.players.filter((player) => player.id !== playerId);
  };
}
