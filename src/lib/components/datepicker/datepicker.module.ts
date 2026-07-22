import { NgModule } from '@angular/core';
import { SioDatepickerDirective, SioDatepickerComponent } from './datepicker.directive';

@NgModule({
  imports: [SioDatepickerDirective, SioDatepickerComponent],
  exports: [SioDatepickerDirective, SioDatepickerComponent]
})
export class SioDatepickerModule {}

export class NbDatepickerModule {}
