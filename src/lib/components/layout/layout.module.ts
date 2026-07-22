import { NgModule } from '@angular/core';
import { SioLayoutComponent, SioLayoutHeaderComponent, SioLayoutColumnComponent } from './layout.component';

@NgModule({
  imports: [SioLayoutComponent, SioLayoutHeaderComponent, SioLayoutColumnComponent],
  exports: [SioLayoutComponent, SioLayoutHeaderComponent, SioLayoutColumnComponent]
})
export class SioLayoutModule {}

export class NbLayoutModule {}
