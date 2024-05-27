import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeachLocationComponent } from '../beach-location/beach-location.component';
import { BeachLocation } from '../beachlocation';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BeachLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by state" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-beach-location
        *ngFor="let beachLocation of beachLocationList" [beachLocation]="beachLocation">
      </app-beach-location>
    </section>
  `,
  //templateUrl: './home.component.html',
  //styleUrl: './home.component.css',
  styles: `
    .results {
      display: grid;
      column-gap: 14px;
      row-gap: 14px;
      grid-template-columns: repeat(auto-fill, minmax(600px, 600px));
      margin-top: 50px;
      justify-content: space-around;
    }
    input[type="text"] {
      border: solid 1px var(--primary-color);
      padding: 10px;
      border-radius: 8px;
      margin-right: 4px;
      display: inline-block;
      width: 30%;
    }
    button {
      padding: 10px;
      border: solid 1px var(--primary-color);
      background: var(--primary-color);
      color: white;
      border-radius: 8px;
    }
  @media (min-width: 500px) and (max-width: 768px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
    input[type="text"] {
        width: 70%;
    }   
  }
  @media (max-width: 499px) {
    .results {
        grid-template-columns: 1fr;
    }    
  }
    `

})
export class HomeComponent {
  beachLocationList: BeachLocation[] = [
    {
      rank: 1,
      name: 'Indian Wells Beach',
      state: 'New York',
      photo: '../assets/beaches/indianwells.png',
      easyAccess: true
    },
    {
      rank: 2,
      name: 'Ocracoke Beach',
      state: 'North Carolina',
      photo: '../assets/beaches/ocracoke.png',
      easyAccess: true
    },
    {
      rank: 3,
      name: 'Newport Beach',
      state: 'California',
      photo: '../assets/beaches/newport-beach.png',
      easyAccess: true
    },
    {
      rank: 4,
      name: 'Huntington Beach',
      state: 'California',
      photo: '../assets/beaches/huntington-beach.png',
      easyAccess: true
    },
    {
      rank: 5,
      name: 'Waikiki Beach',
      state: 'Hawaii',
      photo: '../assets/beaches/waikiki-beach.png',
      easyAccess: true
    },
    {
      rank: 6,
      name: 'Bayhead',
      state: 'New Jersey',
      photo: '../assets/beaches/bayhead2.png',
      easyAccess: true
    },
    {
      rank: 7,
      name: 'Big Sur',
      state: 'California',
      photo: '../assets/beaches/big-sur.png',
      easyAccess: false
    },
    {
      rank: 8,
      name: 'Rockaway Beach',
      state: 'New York',
      photo: '../assets/beaches/rockaway.png',
      easyAccess: true
    },
    {
      rank: 9,
      name: 'Clearwater Beach',
      state: 'Florida',
      photo: '../assets/beaches/clearwater.png',
      easyAccess: true
    },
  ]
}
