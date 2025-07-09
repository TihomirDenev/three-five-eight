import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateModule } from "@ngx-translate/core";

import { RULES_SECTIONS } from "src/app/pages/rules/rules.data";

@Component({
  selector: "app-rules",
  imports: [TranslateModule, CommonModule],
  templateUrl: "./rules.component.html",
  styleUrl: "./rules.component.scss",
})
export class RulesComponent {
  rulesSections = RULES_SECTIONS;

  constructor(readonly router: Router) {}

  goToHome() {
    this.router.navigate(["/"]);
  }
}
