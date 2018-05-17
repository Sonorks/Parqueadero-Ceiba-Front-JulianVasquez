import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParqueaderoService } from './parqueadero.service';
import { alertify } from '../resources/js/alertify.js';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap'

import { Vehicle } from '../models/vehicle';

var alertify = require('../resources/js/alertify.js');


@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['/parqueadero.component.scss'],
  providers: [ParqueaderoService]
})

export class ParqueaderoComponent implements OnInit {

  @ViewChild('tabs')
  private tabs: NgbTabset;


  ingresoModel:Vehicle = new Vehicle;
  vehiculoConsultado:any = {};
  vehiculos:any = {};
  retiroPlaca:String = "";
  consultandoVehiculo = false;
  precioDolar = "caro";

  constructor(
    private parqueaderoService: ParqueaderoService
  ) { }

  ngOnInit() {
    this.cargarVehiculos();
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
        this.ConsultarVehiculo(this.retiroPlaca);
        alertify.success("Se ha retirado el vehiculo");
        this.limpiarForm("Retiro");
        this.cargarVehiculos();
      }
    }, error => {
      alertify.error(error.error.message);
    });
  }

  salidaVehiculo(placa){
    this.retiroPlaca = placa;
    this.tabs.select('retirarTab');
  }

  ConsultarVehiculo(placa) {
    this.parqueaderoService.consultarVehiculo(placa)
    .then(data => {
      this.vehiculoConsultado = data;
      this.consultandoVehiculo=true;
    }, error => {
      alertify.error(error.error.message);
    });
  }

  cargarVehiculos(){
    this.parqueaderoService.cargarVehiculos()
    .then(data => {
      this.vehiculos = data;
    }, error =>{
      alertify.error(error.error.message);
    });
  }

  limpiarForm(formName) {
    if(formName == "Ingreso") {
      this.ingresoModel = new Vehicle;
    } else if (formName == "Retiro") {
      this.retiroPlaca = "";
      this.consultandoVehiculo = false;
    }
  }



}
