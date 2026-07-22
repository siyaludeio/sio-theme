import { NgModule } from '@angular/core';
import { SioActionsComponent, SioActionComponent } from './actions.component';

@NgModule({
  imports: [SioActionsComponent, SioActionComponent],
  exports: [SioActionsComponent, SioActionComponent]
})
export class SioActionsModule {}

export class NbActionsModule {}
