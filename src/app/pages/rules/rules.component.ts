import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-rules',
  imports: [TranslateModule],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {
  constructor(
    readonly router: Router
  ) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
