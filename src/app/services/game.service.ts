import { Injectable } from "@angular/core";

import { Player } from "src/app/models/player.model";

const PLAYERS_KEY = "three-five-eight-players";

@Injectable({ providedIn: "root" })
export class GameService {
  private players: Player[] = [];

  setPlayers(players: Player[]) {
    this.players = players;

    localStorage.setItem(PLAYERS_KEY, JSON.stringify(players));
  }

  getPlayers(): Player[] {
    if (this.players.length > 0) {
      return this.players;
    }

    const saved = localStorage.getItem(PLAYERS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  }

  resetPlayers() {
    this.players = [];
    localStorage.removeItem(PLAYERS_KEY);
  }
}
