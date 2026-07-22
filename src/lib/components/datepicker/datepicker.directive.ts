import { Directive, Input, Component } from '@angular/core';

@Directive({ selector: '[sioDatepicker], [nbDatepicker]', standalone: true })
export class SioDatepickerDirective {
  @Input() sioDatepicker: any;
  @Input() nbDatepicker: any;
}

@Component({
  selector: 'sio-datepicker, nb-datepicker',
  standalone: true,
  template: ''
})
export class SioDatepickerComponent {}
