import { Component } from "@angular/core";

import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  imports: [TranslateModule],
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  menuOpen = false;

  constructor(readonly translateService: TranslateService) {}

  translateText(lang: string) {
    this.translateService.use(lang);
  }
}
