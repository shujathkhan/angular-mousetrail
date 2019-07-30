import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { MtrailComponent } from './mtrail/mtrail.component';


@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    MtrailComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
