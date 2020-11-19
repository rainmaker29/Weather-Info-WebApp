import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: string;
  ngOnInit() {

  }

  getCity(event: any){

    this.city = event.target.value;

  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}