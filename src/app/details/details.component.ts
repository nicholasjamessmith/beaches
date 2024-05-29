import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BeachesService } from '../beaches.service';
import { BeachLocation } from '../beachlocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  //templateUrl: './details.component.html',
  //styleUrl: './details.component.css'
  template: `
    <article>
      <img
        class="beach-photo"
        [src]="beachLocation?.photo"
        alt="Exterior photo of {{ beachLocation?.name }}"
        crossorigin
      />
      <section class="beach-description">
        <h2 class="beach-heading">{{ beachLocation?.name }}</h2>
        <p class="beach-location">Location: {{ beachLocation?.state }}
      </section>
      <section class="beach-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Does this location have easy access: {{ beachLocation?.easyAccess }}</li>
        </ul>
      </section>
      <!--<p>Details works! {{ beachLocationRank }}</p>-->
    </article>
  `,
  styles: `
  `
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  beachLocationRank = -1;
  beachesService = inject(BeachesService)
  beachLocation: BeachLocation | undefined;

  constructor() {
    const beachLocationRank = Number(this.route.snapshot.params['rank']);
    this.beachLocation = this.beachesService.getBeachLocationByRank(beachLocationRank);
  }
}
