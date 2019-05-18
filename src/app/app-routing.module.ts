import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
