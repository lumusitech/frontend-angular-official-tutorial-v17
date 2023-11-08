import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  housingLocation?: HousingLocation;
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocation = this.housingService.getHousingLocationById(
      Number(this.activatedRoute.snapshot.params["id"])
    );
  }
}
