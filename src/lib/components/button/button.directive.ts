import { Directive, Input, HostBinding } from '@angular/core';

@Directive({ selector: '[sioButton], [nbButton]', standalone: true })
export class SioButtonDirective {
  @Input() status: string = 'primary';
  @Input() size: string = 'medium';
  @Input() outline: boolean = false;
  @Input() hero: boolean = false;

  @HostBinding('class')
  get classes(): string {
    let cls = 'btn';
    if (this.outline) {
      cls += " btn-outline-" + this.status;
    } else {
      cls += " btn-" + this.status;
    }
    if (this.size === 'small') cls += ' btn-sm';
    if (this.size === 'large') cls += ' btn-lg';
    return cls;
  }
}
