import { Component, Input } from '@angular/core';

@Component({
  selector: 'sio-icon, nb-icon',
  standalone: true,
  template: '<i class="bi bi-{{icon}}"></i>'
})
export class SioIconComponent {
  @Input() icon: string = '';
  @Input() pack: string = '';
  @Input() status: string = '';
}
