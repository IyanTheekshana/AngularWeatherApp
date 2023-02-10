import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Weather App';
  weatherData?: WeatherData;
  cityName?: string;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather('Paris');
  }

  onSubmit() {
    this.getWeather(this.cityName);
  }

  private getWeather(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (respone) => {
        this.weatherData = respone;
        // console.log(respone);
      },
    });
  }
}
