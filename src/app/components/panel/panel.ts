import { Component, OnInit } from '@angular/core';
import { DesktopItem } from './types/DesktopItem';
import { CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { Item } from './item/item';

@Component({
  selector: 'app-panel',
  imports: [Item, CdkDropList],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel implements OnInit {

  desktopItems: DesktopItem[] = [];
  gridSize = 100;


  ngOnInit(): void {
    this.desktopItems = [
      {id: 1, name: 'Documentos', icon: 'assets/doc-icon.png', position: {x: 0, y: 0}},
      {id: 2, name: 'Documentos', icon: 'assets/doc-icon.png', position: {x: 0, y: 0}},
      {id: 3, name: 'Documentos', icon: 'assets/doc-icon.png', position: {x: 0, y: 0}},
    ]
  }

  drop(event: CdkDragDrop<DesktopItem[]>){
    moveItemInArray(this.desktopItems, event.previousIndex, event.currentIndex);
  }

}
