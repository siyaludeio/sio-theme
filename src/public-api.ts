export * from './lib/components/layout/layout.component';
export * from './lib/components/layout/layout.module';
export * from './lib/components/sidebar/sidebar.component';
export * from './lib/components/sidebar/sidebar.module';
export * from './lib/components/card/card.component';
export * from './lib/components/card/card.module';
export * from './lib/components/menu/menu.component';
export * from './lib/components/menu/menu.module';

export * from './lib/components/input/input.directive';
export * from './lib/components/input/input.module';
export * from './lib/components/button/button.directive';
export * from './lib/components/button/button.module';
export * from './lib/components/icon/icon.component';
export * from './lib/components/icon/icon.module';
export * from './lib/components/list/list.component';
export * from './lib/components/list/list.module';
export * from './lib/components/user/user.component';
export * from './lib/components/user/user.module';
export * from './lib/components/checkbox/checkbox.component';
export * from './lib/components/checkbox/checkbox.module';
export * from './lib/components/select/select.component';
export * from './lib/components/select/select.module';
export * from './lib/components/tabset/tabset.component';
export * from './lib/components/tabset/tabset.module';
export * from './lib/components/datepicker/datepicker.directive';
export * from './lib/components/datepicker/datepicker.module';
export * from './lib/components/actions/actions.component';
export * from './lib/components/actions/actions.module';
export * from './lib/components/search/search.component';
export * from './lib/components/search/search.module';
export * from './lib/components/context-menu/context-menu.directive';
export * from './lib/components/context-menu/context-menu.module';

export * from './lib/services/theme.service';
export * from './lib/services/toastr.service';
export * from './lib/sio-theme.provider';

import { NgModule } from '@angular/core';
export class NbThemeModule {
  static forRoot(opts: any, themes: any[]): any {
    return { ngModule: NbThemeModule, providers: [] };
  }
}
