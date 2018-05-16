import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParqueaderoComponent } from './parqueadero/parqueadero.component';
import { ParqueaderoService } from './parqueadero/parqueadero.service';

@NgModule({
  declarations: [
    AppComponent,
    ParqueaderoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [ParqueaderoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
