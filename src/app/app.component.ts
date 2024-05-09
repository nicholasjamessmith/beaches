import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
//import { RouterOutlet } from '@angular/router';

//The component below gets rendered to the landing page of the application.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  //imports: [RouterOutlet],
  template: `
    <main>
      <header>
        <img class="logo" src="assets/home-beach.png" alt="logo" aria-hidden="true" />
      </header>
        <section class="content">
          <h1>Hello, World!</h1>
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
