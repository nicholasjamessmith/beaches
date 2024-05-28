import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
import { RouterModule } from '@angular/router'
//import { RouterOutlet } from '@angular/router';

//The component below gets rendered to the landing page of the application.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  //imports: [RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
      <header>
        <img class="logo" src="assets/logo.png" alt="logo" aria-hidden="true" />
      </header>
      </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
    </main>
  `,
  styles: `
    h1{
      color: blue
      }
    img {
      width: 25%;
    }`,
  //templateUrl: './app.component.html`
  //styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'beaches';
}
