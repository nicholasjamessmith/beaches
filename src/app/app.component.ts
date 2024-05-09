import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';

//The component below gets rendered to the landing page of the application.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  //imports: [RouterOutlet],
  template: `
    <h1>Hello, World!</h1>
  `,
  //templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'beaches';
}
