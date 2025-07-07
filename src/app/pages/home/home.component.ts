import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // imports: [TranslateModule], // Add if you need translations
})
export class HomeComponent {
  constructor(readonly router: Router) {}

  goToPlayers() {
    this.router.navigate(['/players']);
  }

  goToRules() {
    this.router.navigate(['/rules']);
  }
}
