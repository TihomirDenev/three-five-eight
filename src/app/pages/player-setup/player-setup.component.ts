import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { Player } from "src/app/models/player.model";
import { GameService } from "src/app/services/game.service";

@Component({
  selector: "app-player-setup",
  templateUrl: "./player-setup.component.html",
  styleUrl: "./player-setup.component.scss",
  imports: [FormsModule, TranslateModule],
})
export class PlayerSetupComponent implements OnInit {
  players: Player[] = [];

  constructor(readonly router: Router, readonly gameService: GameService) {}

  ngOnInit() {
    const randomizedQuotas = this.shuffleQuotas([3, 5, 8]);

    this.players = [
      { name: "", quota: randomizedQuotas[0] },
      { name: "", quota: randomizedQuotas[1] },
      { name: "", quota: randomizedQuotas[2] },
    ];
  }

  startGame() {
    this.gameService.setPlayers(this.players);
    this.router.navigate(["/board"]);
  }

  goToHome() {
    this.router.navigate(["/"]);
  }

  private shuffleQuotas(quotas: number[]): number[] {
    return quotas
      .map((q) => ({ value: q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.value);
  }
}
