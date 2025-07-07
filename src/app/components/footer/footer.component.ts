import { Component } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

@Component({
  imports: [TranslateModule],
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  date = new Date().getFullYear();
}
