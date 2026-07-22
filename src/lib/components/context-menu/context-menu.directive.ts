import { Directive, Input } from '@angular/core';

@Directive({ selector: '[sioContextMenu], [nbContextMenu]', standalone: true })
export class SioContextMenuDirective {
  @Input() sioContextMenu: any;
  @Input() nbContextMenu: any;
}
