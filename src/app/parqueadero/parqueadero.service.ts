import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  constructor(private http: HttpClient) { }

  consultarVehiculo(placa){
    return this.http.get('http://localhost:8090/parking/ticket/'+placa).toPromise();
  }

  ingresarVehiculo(vehiculo:Vehicle){
    return this.http.post<any>('http://localhost:8090/parking/addVehicle',vehiculo).toPromise();
  }

  retirarVehiculo(placa){
    return this.http.put('http://localhost:8090/parking/removeVehicle/'+placa, null).toPromise();
  }


}
