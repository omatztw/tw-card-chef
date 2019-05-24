import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

import { CardService } from './services/card.service';
import { ResultComponent } from './components/result/result.component';
import { ErrorService } from './services/error.service';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './components/history/history.component';
import { HistoryService } from './services/history.service';
import { EnabledPipe } from './components/history/enabled.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ResultComponent,
    FooterComponent,
    HistoryComponent,
    EnabledPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CardService,
    ErrorService,
    HistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
