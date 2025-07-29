import { Component, input } from '@angular/core';
import { DesktopItem } from '../types/DesktopItem';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item',
  imports: [CdkDrag],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  item = input<DesktopItem>();
}
