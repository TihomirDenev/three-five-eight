import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { Player } from "src/app/models/player.model";
import { GameService } from "src/app/services/game.service";
import { rotatePlayerQuotas, getWinnerName, calculateRoundPoints } from "src/app/helpers/game-logic";

@Component({
  selector: "app-game-board",
  templateUrl: "./game-board.component.html",
  styleUrl: "./game-board.component.scss",
  imports: [FormsModule, CommonModule, TranslateModule],
})
export class GameBoardComponent implements OnInit {
  players: Player[] = [];
  tricksWonThisRound: (number | null)[] = [];
  totalPointsPerPlayer: number[] = [];
  currentRound: number = 1;
  roundPointsHistory: number[][] = [];
  gameOver: boolean = false;
  winnerName: string | null = null;

  constructor(private readonly gameService: GameService) {}

  get canProceedToNextRound(): boolean {
    return (this.tricksWonThisRound as number[]).reduce((a, b) => a + b, 0) === 16;
  }

  ngOnInit(): void {
    this.loadPlayers();
    this.resetGameState();
  }

  startNextRound(): void {
    this.recordRoundPoints();

    if (this.currentRound >= 9) {
      this.finalizeGame();

      return;
    }

    rotatePlayerQuotas(this.players);
    this.currentRound++;
    this.tricksWonThisRound = Array(this.players.length).fill(null);
  }

  finishGame(): void {
    this.recordRoundPoints();
    this.finalizeGame();
  }

  newGame(): void {
    this.resetGameState();
  }

  private loadPlayers(): void {
    this.players = this.gameService.getPlayers();
  }

  private resetGameState(): void {
    this.tricksWonThisRound = Array(this.players.length).fill(null);
    this.totalPointsPerPlayer = Array(this.players.length).fill(0);
    this.currentRound = 1;
    this.roundPointsHistory = [];
    this.gameOver = false;
    this.winnerName = null;
  }

  private recordRoundPoints(): void {
    if (!this.canProceedToNextRound) return;

    const roundPoints = calculateRoundPoints(this.players, this.tricksWonThisRound as number[]);
    
    this.roundPointsHistory.push([...roundPoints]);
    this.players.forEach((player, i) => {
      this.totalPointsPerPlayer[i] += roundPoints[i];
    });
  }

  private finalizeGame(): void {
    this.gameOver = true;
    this.winnerName = getWinnerName(
      this.players,
      this.totalPointsPerPlayer,
      this.roundPointsHistory
    );
  }
}
