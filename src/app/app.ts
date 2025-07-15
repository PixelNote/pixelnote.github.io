import { Component } from '@angular/core';
import { Footer } from './footer/footer';
import { Panel } from './panel/panel';

@Component({
  selector: 'app-root',
  imports: [Footer, Panel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
