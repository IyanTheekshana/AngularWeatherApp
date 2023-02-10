import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIURL + cityName, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHost)
        .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKey),
    });
  }
}
