import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [TranslateModule],
})
export class NotFoundComponent {
  constructor(readonly router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }
}
