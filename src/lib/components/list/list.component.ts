import { Component } from '@angular/core';

@Component({
  selector: 'sio-list, nb-list',
  standalone: true,
  template: '<ul class="list-group"><ng-content></ng-content></ul>'
})
export class SioListComponent {}

@Component({
  selector: 'sio-list-item, nb-list-item',
  standalone: true,
  template: '<li class="list-group-item"><ng-content></ng-content></li>'
})
export class SioListItemComponent {}
