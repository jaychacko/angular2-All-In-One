import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonsComponent } from './commons/commons.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { ContentComponent } from './content/content.component';
import { WeatherComponent } from './content/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonsComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
