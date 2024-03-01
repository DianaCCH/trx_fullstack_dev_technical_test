import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Vehicle } from '../_models/vehicle';
import { Response } from '../_models/response';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient,
    @Inject('API_URL') private apiUrl: string,) { }

  private _controller = 'api/v1/vehicle';

  getVehicles(): Observable<Response<Vehicle>> {
    return this.http.get<Response<Vehicle>>(`${this.apiUrl}${this._controller}`);
  }

  getVehiclesByFilter(filter: string, values: string[]): Observable<Response<Vehicle>> {
    let params = new HttpParams();
    values.forEach(element => {
      params = params.append(filter, element);
    })
    return this.http.get<Response<Vehicle>>(`${this.apiUrl}${this._controller}/getVehiclesByFilter?${filter}=${values}`);
  }

  createNewVehicle(newVehicle: Vehicle): Observable<Response<Vehicle>> {
    return this.http.post<Response<Vehicle>>(`${this.apiUrl}${this._controller}/createNewVehicle`, newVehicle);
  }

  updateVehicle(updateVehicle: Vehicle): Observable<Response<Vehicle>> {
    return this.http.patch<Response<Vehicle>>(`${this.apiUrl}${this._controller}/updateVehicle/${updateVehicle.id}`, updateVehicle);
  }

  removeVehicle(vehicleId: number): Observable<Response<Vehicle>> {
    return this.http.delete<Response<Vehicle>>(`${this.apiUrl}${this._controller}/deleteVehicle/${vehicleId}`);
  }
}
