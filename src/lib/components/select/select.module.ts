import { NgModule } from '@angular/core';
import { SioSelectComponent, SioOptionComponent } from './select.component';

@NgModule({
  imports: [SioSelectComponent, SioOptionComponent],
  exports: [SioSelectComponent, SioOptionComponent]
})
export class SioSelectModule {}

export class NbSelectModule {}
