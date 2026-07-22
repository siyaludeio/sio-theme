import { NgModule } from '@angular/core';
import { SioContextMenuDirective } from './context-menu.directive';

@NgModule({
  imports: [SioContextMenuDirective],
  exports: [SioContextMenuDirective]
})
export class SioContextMenuModule {}

export class NbContextMenuModule {}
