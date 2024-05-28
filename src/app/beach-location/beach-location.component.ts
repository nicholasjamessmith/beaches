import { Component, Input } from '@angular/core';
//CommonModule import?
import { BeachLocation } from '../beachlocation';

@Component({
  selector: 'app-beach-location',
  standalone: true,
  imports: [],
  //templateUrl: './beach-location.component.html',
  //styleUrl: './beach-location.component.css',\
  template: `
   <section class="beach">
    <img
      class="beach-photo"
      [src]="beachLocation.photo"
      alt="Photo of {{beachLocation.name}}"
      crossorigin
      />
    <h1 class="beach-rank">{{ beachLocation.rank}}</h1>
    <h2 class="beach-heading">{{ beachLocation.name }}</h2>
   </section>
  `,
  styles: `
    .beach {
      border: 2px solid black;
      border-radius: 4px;
      padding: 12px;
    }
    .beach-photo {
      max-width: 100%;
      max-height: 100%;
    }
/*
    .listing {
      background: var(--accent-color);
      border-radius: 30px;
      padding-bottom: 30px;
    }
    .listing-heading {
      color: var(--primary-color);
      padding: 10px 20px 0 20px;
    }
    .listing-photo {
      height: 250px;
      width: 100%;
      object-fit: cover;
      border-radius: 30px 30px 0 0;
    }
    .listing-location {
      padding: 10px 20px 20px 20px;
    }
    .listing-location::before {
      content: url("/assets/location-pin.svg") / "";
    }
    section.listing a {
      padding-left: 20px;
      text-decoration: none;
      color: var(--primary-color);
    }
    section.listing a::after {
      content: "\x83";
      margin-left: 5px;
    }
*/
  `
})
export class BeachLocationComponent {
  //Input syntax note: you have to add the ! because the input is expecting the value to be passed. In this case, there is no default value. In our example application case we know that the value will be passed in - this is by design. The exclamation point is called the non-null assertion operatore and itr tells the TypeScript compiler tha tthe value of this property won't be null or undefined.
  //Challenge: Refactor all @Input()s to Signal Inputs after completing app
  @Input() beachLocation!: BeachLocation
}
