import { Component } from '@angular/core';
import { VERSION } from './consts/version.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  VERSION = VERSION;
}
