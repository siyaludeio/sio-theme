import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-select, nb-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <select class="form-select" [ngClass]="{'w-100': fullWidth}" [ngModel]="selected" (ngModelChange)="onChange($event)" [disabled]="disabled">
      <ng-content></ng-content>
    </select>
  `
})
export class SioSelectComponent {
  @Input() selected: any;
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Output() selectedChange = new EventEmitter<any>();

  onChange(val: any) {
    this.selected = val;
    this.selectedChange.emit(val);
  }
}

@Component({
  selector: 'sio-option, nb-option',
  standalone: true,
  template: '<option [value]="value"><ng-content></ng-content></option>'
})
export class SioOptionComponent {
  @Input() value: any;
}
