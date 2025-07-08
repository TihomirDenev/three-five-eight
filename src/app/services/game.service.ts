import { Injectable } from "@angular/core";

import { Player } from "src/app/models/player.model";

@Injectable({ providedIn: "root" })
export class GameService {
  private players: Player[] = [];

  setPlayers(players: Player[]) {
    this.players = players;
  }

  getPlayers(): Player[] {
    return this.players;
  }
}
