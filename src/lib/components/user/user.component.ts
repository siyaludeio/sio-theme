import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-user, nb-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex align-items-center">
      <div *ngIf="picture" class="me-2">
        <img [src]="picture" class="rounded-circle" [style.width.px]="imageSize" [style.height.px]="imageSize"/>
      </div>
      <div *ngIf="!picture" class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center me-2" [style.width.px]="imageSize" [style.height.px]="imageSize">
        {{ name?.charAt(0) | uppercase }}
      </div>
      <div class="user-info">
        <strong>{{name}}</strong>
        <br *ngIf="title"/><small *ngIf="title" class="text-muted">{{title}}</small>
      </div>
    </div>
  `
})
export class SioUserComponent {
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() picture: string = '';
  @Input() size: string = 'medium';

  get imageSize(): number {
    switch (this.size) {
      case 'small': return 24;
      case 'large': return 48;
      case 'giant': return 64;
      default: return 32;
    }
  }
}
