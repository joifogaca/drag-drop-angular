import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DragDropModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'drag-drop-angular';

  availableItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItems: string[] = ['outro 1', 'outro 2', 'outro 3'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // Reordenar itens dentro do mesmo grupo
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transferir item para o grupo diferente
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
