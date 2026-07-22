import { NgModule } from '@angular/core';
import { SioButtonDirective } from './button.directive';

@NgModule({
  imports: [SioButtonDirective],
  exports: [SioButtonDirective]
})
export class SioButtonModule {}

export class NbButtonModule {}
