import { NgModule } from '@angular/core';
import { SioListComponent, SioListItemComponent } from './list.component';

@NgModule({
  imports: [SioListComponent, SioListItemComponent],
  exports: [SioListComponent, SioListItemComponent]
})
export class SioListModule {}

export class NbListModule {}
