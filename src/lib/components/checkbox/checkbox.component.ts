import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-checkbox, nb-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" [checked]="checked" [disabled]="disabled" (change)="onChange($event)">
      <label class="form-check-label"><ng-content></ng-content></label>
    </div>
  `
})
export class SioCheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.checkedChange.emit(this.checked);
  }
}
