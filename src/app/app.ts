import { Component } from '@angular/core';
import { Panel } from './components/panel/panel';
import { Taskbar } from './components/footer/taskbar/taskbar';

@Component({
  selector: 'app-root',
  imports: [Panel, Taskbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
