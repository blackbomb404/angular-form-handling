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
    section {
      border: 1px solid gray;
      padding: .5rem;
    }
    nav {
      margin-bottom: .25rem;

      ul {
        display: flex;
        column-gap: .75rem;
        list-style-type: none;

        a {
          text-decoration: none;
          font-size: 1rem;
          color: rgb(0 0 0 / .5);

          &.active{
            color: #3366cc;
            font-weight: 500;
          }
        }
      }
    }
  `
})
export class AppComponent {

  links = [
    { text: 'Template-Driven', path: '' },
    { text: 'Reactive', path: 'reactive' }
  ]
}
