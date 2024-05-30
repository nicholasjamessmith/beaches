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
      <a [routerLink]="['/']" (click)="logoLinkClick()">
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
    img {
      max-width: 15%;
      border: 2px solid blue
    }
    
  `,
  //templateUrl: './app.component.html`
  //styleUrl: './app.component.css'

})
export class AppComponent {
  logoLinkClick() {
    console.log("Link clicked!")
  }
  title = 'beaches';
}
