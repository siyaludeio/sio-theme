import { NgModule } from '@angular/core';
import { SioTabsetComponent, SioTabComponent } from './tabset.component';

@NgModule({
  imports: [SioTabsetComponent, SioTabComponent],
  exports: [SioTabsetComponent, SioTabComponent]
})
export class SioTabsetModule {}

export class NbTabsetModule {}
