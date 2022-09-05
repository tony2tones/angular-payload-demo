import { Component, OnInit } from '@angular/core';
import { Country } from './models/country.module';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public countries:any;

  constructor(private service: ServiceService) { }

  public ngOnInit() {
    this.service.getData().subscribe((data: Country[]) => {
      const resp = data.map((country) => {
        return {
          name: country?.name?.common,
          cca2: country?.cca2,
          population: country?.population,
        }
      });
      console.log('new value? ', resp);
      this.countries = resp;
    });
  }
}
