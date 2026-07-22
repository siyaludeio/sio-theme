import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-actions, nb-actions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex align-items-center" [ngClass]="{'flex-row': size !== 'medium'}">
      <ng-content></ng-content>
    </div>
  `
})
export class SioActionsComponent {
  @Input() size: string = 'medium';
}

@Component({
  selector: 'sio-action, nb-action',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="px-2 cursor-pointer text-decoration-none">
      <i *ngIf="icon" class="bi bi-{{icon}}"></i>
      <ng-content></ng-content>
    </div>
  `
})
export class SioActionComponent {
  @Input() icon: string = '';
}
