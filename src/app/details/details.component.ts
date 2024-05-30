import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BeachesService } from '../beaches.service';
import { BeachLocation } from '../beachlocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
      <section class="beach-inquiry">
        <h2 class="section-heading">Inquire about visiting this beach</h2>
        <form [formGroup]="inquireForm" (submit)="submitInquiry()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />

          <label for="email">E-mail</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Submit Inquiry</button>
        </form>
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


  //In Angular, FormGroup and FormControl are types that enable you to build forms. The FormControl type can provide a default value and shape the form data. In this example firstName is a string and the default value is empty string.
  inquireForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  submitInquiry() {
    this.beachesService.submitInquiry(
      this.inquireForm.value.firstName ?? '',
      this.inquireForm.value.lastName ?? '',
      this.inquireForm.value.email ?? '',
    );
  }

  constructor() {
    const beachLocationRank = Number(this.route.snapshot.params['rank']);
    this.beachLocation = this.beachesService.getBeachLocationByRank(beachLocationRank);
  }
}
