import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

import { CardService } from './services/card.service';
import { ResultComponent } from './components/result/result.component';
import { ErrorService } from './services/error.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CardService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
