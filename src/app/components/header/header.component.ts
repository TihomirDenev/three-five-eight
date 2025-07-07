import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  imports: [TranslateModule],
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(
    readonly translateService: TranslateService,
    readonly router: Router,
  ) {}

  translateText(lang: string) {
    this.translateService.use(lang);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
