import { Player } from "src/app/models/player.model";

export function rotatePlayerQuotas(players: Player[]): void {
  for (const player of players) {
    if (player.quota === 8) {
      player.quota = 3;
    } else if (player.quota === 3) {
      player.quota = 5;
    } else if (player.quota === 5) {
      player.quota = 8;
    }
  }
}

export function calculateRoundPoints(players: Player[], tricksPerPlayer: number[]): number[] {
  return players.map((player, i) => tricksPerPlayer[i] - player.quota);
}

export function getWinnerName(players: Player[], totalPointsPerPlayer: number[], roundPointsHistory: number[][]): string {
  const maxPoints = Math.max(...totalPointsPerPlayer);

  let tiedIndices = totalPointsPerPlayer
    .map((score, i) => (score === maxPoints ? i : -1))
    .filter((i) => i !== -1);

  if (tiedIndices.length === 1) {
    return players[tiedIndices[0]].name;
  }

  for (let round = roundPointsHistory.length - 1; round >= 0; round--) {
    const roundPoints = roundPointsHistory[round];
    const maxThisRound = Math.max(...tiedIndices.map((i) => roundPoints[i]));
    const stillTied = tiedIndices.filter((i) => roundPoints[i] === maxThisRound);

    if (stillTied.length === 1) {
      return players[stillTied[0]].name;
    }

    tiedIndices = stillTied;
  }

  return players[tiedIndices[0]].name;
}
