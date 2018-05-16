import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParqueaderoService } from './parqueadero.service';
import { alertify } from '../resources/js/alertify.js';

import { Vehicle } from '../models/vehicle';

var alertify = require('../resources/js/alertify.js');

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['/parqueadero.component.scss'],
  providers: [ParqueaderoService]
})

export class ParqueaderoComponent implements OnInit {

  ingresoModel:Vehicle = new Vehicle;
  vehiculoConsultado:any = {};
  retiroPlaca:String = "";
  consultaPlaca:String = "";
  consultandoVehiculo = false;

  constructor(
    private parqueaderoService: ParqueaderoService
  ) { }

  ngOnInit() {
  }

  IngresarVehiculo() {
    this.parqueaderoService.ingresarVehiculo(this.ingresoModel)
    .then(data => {
      if(data) {
        alertify.success("Vehiculo ingresado exitosamente");
      }
    }, error => {
      alertify.error(error.error.message);
    });
    console.log(this.ingresoModel);
    this.limpiarForm("Ingreso");
  }

  RetirarVehiculo() {
    this.parqueaderoService.retirarVehiculo(this.retiroPlaca)
    .then(data => {
      if (data) {
        alertify.success("Se ha retirado el vehiculo");
      }
    }, error => {
      alertify.error(error.error.message);
    });
    this.limpiarForm("Retiro");
  }

  ConsultarVehiculo() {
    this.parqueaderoService.consultarVehiculo(this.consultaPlaca)
    .then(data => {
      this.vehiculoConsultado = data;
      this.consultandoVehiculo=true;
    }, error => {
      alertify.error(error.error.message);
    });
    this.consultaPlaca="";
  }

  limpiarForm(formName) {
    if(formName == "Ingreso") {
      this.ingresoModel = new Vehicle;
    } else if (formName == "Retiro") {
      this.retiroPlaca = "";
    } else if (formName == "Consulta") {
      this.consultaPlaca = "";
      this.vehiculoConsultado = {};
      this.consultandoVehiculo = false;
    }
  }



}
