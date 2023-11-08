import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      @for(housingLocation of housingLocationList; track housingLocation.id) {
      <app-housing-location [housingLocation]="housingLocation" />
      }
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
}