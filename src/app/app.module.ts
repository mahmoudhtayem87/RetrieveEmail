import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {

    const appElement = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("lr-get-email", appElement);
  }
  ngDoBootstrap() { }
}
