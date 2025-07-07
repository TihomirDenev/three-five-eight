import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Player } from 'src/app/models/player.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-player-setup',
  templateUrl: './player-setup.component.html',
  styleUrl: './player-setup.component.scss',
  imports: [FormsModule]
})
export class PlayerSetupComponent implements OnInit {
  players: Player[] = [];

  constructor(
    readonly router: Router,
    readonly gameService: GameService,
  ) {}

  ngOnInit() {
    this.players = [
    { name: '', quota: 3 },
    { name: '', quota: 5 },
    { name: '', quota: 8 }
  ];
  }

  startGame() {
    this.gameService.setPlayers(this.players);
    this.router.navigate(['/board']);
  }
}
