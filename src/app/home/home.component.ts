import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeachLocationComponent } from '../beach-location/beach-location.component';
import { BeachLocation } from '../beachlocation';
import { BeachesService } from '../beaches.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BeachLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by state" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-beach-location
        *ngFor="let beachLocation of filteredBeachList" [beachLocation]="beachLocation">
      </app-beach-location>
    </section>
  `,
  //templateUrl: './home.component.html',
  //styleUrl: './home.component.css',
  styles: `
  form { border: 2px solid blue}
  .results {
    display: grid;
    column-gap: 14px;
    row-gap: 14px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    margin-top: 50px;
    justify-content: space-around;
    }
    `

})
export class HomeComponent {
  beachLocationList: BeachLocation[] = [];
  beachesService: BeachesService = inject(BeachesService);
  filteredBeachList: BeachLocation[] = [];

  //This function uses the String filter function to compare the value of the text parameter against the beachLocation.state property. You can update this function to match against any property or multiple properties for a fun exercise.
  filterResults(text: string) {
    //console.log("filterResults function executed")
    if (!text) {
      this.filteredBeachList = this.beachLocationList;
      return;
    }

    this.filteredBeachList = this.beachLocationList.filter((beachLocation) => beachLocation?.state.toLowerCase().includes(text.toLowerCase()),
    )
  }
  constructor() {
    this.beachLocationList = this.beachesService.getAllBeachLocations();
    this.filteredBeachList = this.beachLocationList;
  }
}
