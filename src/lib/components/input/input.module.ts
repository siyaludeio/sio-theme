import { NgModule } from '@angular/core';
import { SioInputDirective } from './input.directive';

@NgModule({
  imports: [SioInputDirective],
  exports: [SioInputDirective]
})
export class SioInputModule {}

export class NbInputModule {}
