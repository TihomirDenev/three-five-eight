import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class LayoutComponent {}
