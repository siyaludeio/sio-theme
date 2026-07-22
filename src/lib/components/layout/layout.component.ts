import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-layout, nb-layout',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen flex flex-col bg-[var(--bg-layout,#edf1f7)] text-[var(--text-primary,#222b45)] transition-colors duration-200">
      <ng-content select="sio-layout-header, nb-layout-header"></ng-content>
      <div class="flex flex-1 relative">
        <ng-content select="sio-sidebar, nb-sidebar"></ng-content>
        <main class="flex-1 p-6 overflow-y-auto">
          <ng-content select="sio-layout-column, nb-layout-column"></ng-content>
          <ng-content></ng-content>
        </main>
      </div>
      <ng-content select="sio-layout-footer, nb-layout-footer"></ng-content>
    </div>
  `
})
export class SIOLayoutComponent {}
