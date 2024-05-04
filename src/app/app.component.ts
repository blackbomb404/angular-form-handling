import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styles: `
    :host {
      display: grid;
      grid-template-rows: auto 1fr;
      padding: .5rem;
      height: 100%;
    }
    h1 {
      font-weight: 500;
    }
    ul {
      display: flex;
      column-gap: .75rem;
      list-style-type: none;
    }
    section {
      border: 1px solid gray;
      padding: .5rem;
    }
  `
})
export class AppComponent {
  title = 'form-handling';

  links = [
    { text: 'Template-Driven', path: '' },
    { text: 'Reactive', path: 'reactive' }
  ]
}
