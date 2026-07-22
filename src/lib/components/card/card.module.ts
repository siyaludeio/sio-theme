import { NgModule } from '@angular/core';
import { SioCardComponent, SioCardHeaderComponent, SioCardBodyComponent, SioCardFooterComponent } from './card.component';

@NgModule({
  imports: [SioCardComponent, SioCardHeaderComponent, SioCardBodyComponent, SioCardFooterComponent],
  exports: [SioCardComponent, SioCardHeaderComponent, SioCardBodyComponent, SioCardFooterComponent]
})
export class SioCardModule {}

export class NbCardModule {}
