import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sio-sidebar, nb-sidebar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside [class.hidden]="collapsed()" class="w-64 bg-[var(--bg-sidebar,#f7f9fc)] border-r border-slate-200 dark:border-slate-800 transition-all duration-300">
      <ng-content></ng-content>
    </aside>
  `
})
export class SIOSidebarComponent {
  readonly collapsed = signal<boolean>(false);

  toggle(): void {
    this.collapsed.update(v => !v);
  }
}
