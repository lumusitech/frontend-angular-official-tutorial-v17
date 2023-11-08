import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";

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
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}