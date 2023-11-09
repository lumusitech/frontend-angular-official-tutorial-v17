import { CommonModule } from "@angular/common"
import { Component, inject } from "@angular/core"
import { HousingLocation } from "../housing-location"
import { HousingLocationComponent } from "../housing-location/housing-location.component"
import { HousingService } from "../housing.service"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>

    <section class="results">
      @for(housingLocation of filteredLocationList; track housingLocation.id) {
      <app-housing-location [housingLocation]="housingLocation" />
      }
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = []

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
    this.filteredLocationList = this.housingLocationList
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    )
  }
}
