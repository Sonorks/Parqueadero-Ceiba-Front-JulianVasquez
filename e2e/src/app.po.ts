import { browser, by, element } from 'protractor';
import { NgModel } from '@angular/forms';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTituloIngresar() {
    return element(by.id('ingresarTitulo')).getText();
  }

  setIngresoTipoVehiculoMoto(){
    element(by.id('ingresarTipoVehiculo')).click();
    element(by.id('tipoMoto')).click();
    
  }
  getVisibilidadCC(){
    return element(by.id('ingresarCCDiv')).isPresent();
  }

  limpiarFormulario(){
    return element(by.id('ingresarLimpiar')).click();
  }

  getPlacaIngreso(){
    return (element(by.id('placaIngreso')).getText())
  }
}
