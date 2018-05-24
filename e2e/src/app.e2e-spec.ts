import { AppPage } from './app.po';
import { browser } from 'protractor';


describe('Ingreso de vehiculos test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('Titulo del tab correcto:', function(){
    page.navigateTo();
    expect(page.getTituloIngresar()).toEqual('INGRESAR VEHICULO');
  })

  it('Mostrar CC si tipo de vehiculo es Moto', function(){
    page.navigateTo();
    page.setIngresoTipoVehiculoMoto();
    expect(page.getVisibilidadCC());
  })

  it('Limpiar formumlario:', function(){
    page.navigateTo();
    page.setIngresoTipoVehiculoMoto();
    page.limpiarFormulario();
    expect(page.getPlacaIngreso()).toEqual("");
    expect(!page.getVisibilidadCC());
  })
});
