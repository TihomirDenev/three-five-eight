import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  imports: [TranslateModule],
})
export class HomeComponent {
  constructor(readonly router: Router) {}

  goToPlayers() {
    this.router.navigate(["/players"]);
  }

  goToRules() {
    this.router.navigate(["/rules"]);
  }
}
