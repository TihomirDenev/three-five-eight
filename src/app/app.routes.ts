import { Routes } from "@angular/router";

import { LayoutComponent } from "src/app/layout/layout.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { PlayerSetupComponent } from "src/app/pages/player-setup/player-setup.component";
import { GameBoardComponent } from "src/app/pages/game-board/game-board.component";
import { RulesComponent } from "src/app/pages/rules/rules.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "players", component: PlayerSetupComponent },
      { path: "board", component: GameBoardComponent },
      { path: "rules", component: RulesComponent },
      { path: "**", component: NotFoundComponent },
    ],
  },
];
