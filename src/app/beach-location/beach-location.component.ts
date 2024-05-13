import { Component } from '@angular/core';

@Component({
  selector: 'app-beach-location',
  standalone: true,
  imports: [],
  //templateUrl: './beach-location.component.html',
  //styleUrl: './beach-location.component.css',\
  template: `
    <h1>Beach Locations Go Here</h1>
  `,
  styles: `
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
  `
})
export class BeachLocationComponent {

}
