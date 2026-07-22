import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-card, nb-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-white rounded shadow-sm border border-gray-200 overflow-hidden" [ngClass]="sizeClass">
      <ng-content></ng-content>
    </div>
  `
})
export class SIOCardComponent {
  @Input() size: string = '';

  get sizeClass() {
    return this.size ? `sio-card-${this.size}` : '';
  }
}

@Component({
  selector: 'sio-card-header, nb-card-header',
  standalone: true,
  template: `
    <div class="px-4 py-3 border-b border-gray-200 font-semibold bg-gray-50">
      <ng-content></ng-content>
    </div>
  `
})
export class SIOCardHeaderComponent {}

@Component({
  selector: 'sio-card-body, nb-card-body',
  standalone: true,
  template: `
    <div class="p-4">
      <ng-content></ng-content>
    </div>
  `
})
export class SIOCardBodyComponent {}

@Component({
  selector: 'sio-card-footer, nb-card-footer',
  standalone: true,
  template: `
    <div class="px-4 py-3 border-t border-gray-200 bg-gray-50">
      <ng-content></ng-content>
    </div>
  `
})
export class SIOCardFooterComponent {}
