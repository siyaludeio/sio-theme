import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-tab, nb-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-pane fade" [class.show]="active" [class.active]="active">
      <ng-content></ng-content>
    </div>
  `
})
export class SioTabComponent {
  @Input() tabTitle: string = '';
  @Input() active: boolean = false;
}

@Component({
  selector: 'sio-tabset, nb-tabset',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="nav nav-tabs" [ngClass]="{'nav-fill': fullWidth}">
      <li class="nav-item" *ngFor="let tab of tabs">
        <a class="nav-link" [class.active]="tab.active" href="javascript:void(0)" (click)="selectTab(tab)">
          {{tab.tabTitle}}
        </a>
      </li>
    </ul>
    <div class="tab-content pt-3">
      <ng-content></ng-content>
    </div>
  `
})
export class SioTabsetComponent implements AfterContentInit {
  @Input() fullWidth: boolean = false;
  @ContentChildren(SioTabComponent) tabs;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0 && this.tabs.first) {
      this.tabs.first.active = true;
    }
  }

  selectTab(tab) {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}
