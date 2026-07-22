import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sio-search, nb-search',
  standalone: true,
  template: `
    <div class="input-group">
      <span class="input-group-text bg-transparent border-end-0"><i class="bi bi-search"></i></span>
      <input type="text" class="form-control border-start-0" [placeholder]="placeholder" (input)="onInput($event)">
    </div>
  `
})
export class SioSearchComponent {
  @Input() type: string = '';
  @Input() placeholder: string = 'Search...';
  @Output() search = new EventEmitter();

  onInput(event) {
    const val = event.target.value;
    this.search.emit(val);
  }
}
