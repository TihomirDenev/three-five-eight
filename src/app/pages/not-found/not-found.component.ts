import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [TranslateModule, RouterModule],
})
export class NotFoundComponent {
  navigateHome() {
    window.location.href = '/';
  }
}
