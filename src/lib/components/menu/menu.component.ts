import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sio-menu, nb-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="flex flex-col p-0 m-0 list-none">
      @for (item of items; track item.title) {
        <li class="mb-1">
          <a *ngIf="item.link" [routerLink]="item.link" 
             routerLinkActive="bg-blue-100 text-blue-700 border-l-4 border-blue-600 font-semibold"
             class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors duration-150 border-l-4 border-transparent">
            
            <i *ngIf="item.icon" [class]="'bi bi-' + item.icon + ' mr-3 text-lg'"></i>
            <span>{{ item.title }}</span>
          </a>
          
          <a *ngIf="!item.link" href="javascript:void(0)"
             (click)="toggle(item)"
             class="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors duration-150 border-l-4 border-transparent">
            
            <i *ngIf="item.icon" [class]="'bi bi-' + item.icon + ' mr-3 text-lg'"></i>
            <span class="flex-1">{{ item.title }}</span>
            <i class="bi" [class.bi-chevron-down]="!item.expanded" [class.bi-chevron-up]="item.expanded"></i>
          </a>

          @if (item.children && item.expanded) {
            <ul class="pl-8 mt-1 flex flex-col list-none">
              @for (child of item.children; track child.title) {
                <li class="mb-1">
                  <a *ngIf="child.link" [routerLink]="child.link" 
                     routerLinkActive="text-blue-700 font-semibold"
                     class="flex items-center py-2 px-3 text-gray-600 hover:text-gray-900 transition-colors duration-150">
                    <i *ngIf="child.icon" [class]="'bi bi-' + child.icon + ' mr-2'"></i>
                    <span>{{ child.title }}</span>
                  </a>
                </li>
              }
            </ul>
          }
        </li>
      }
    </ul>
  `
})
export class SIOMenuComponent {
  @Input() items: any[] = [];

  toggle(item: any) {
    item.expanded = !item.expanded;
  }
}
