import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-main',
  standalone: true,
  template: `
    <h1>Employee Main</h1>
    <nav>
      <ul>
        <li><a routerLink="/todo">Todo</a></li>
        <li><a routerLink="/login">Login</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
    `
  ],
  imports: [RouterLink],
})
export class MainComponent {}
