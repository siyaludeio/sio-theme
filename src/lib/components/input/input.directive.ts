import { Directive, Input, HostBinding } from '@angular/core';

@Directive({ selector: '[sioInput], [nbInput]', standalone: true })
export class SioInputDirective {
  @Input() fullWidth: boolean = false;
  @Input() status: string = 'basic';
  @Input() size: string = 'medium';

  @HostBinding('class')
  get classes(): string {
    let cls = 'form-control';
    if (this.fullWidth) cls += ' w-100';
    if (this.status) cls += " border-" + this.status;
    if (this.size === 'small') cls += ' form-control-sm';
    if (this.size === 'large') cls += ' form-control-lg';
    return cls;
  }
}
