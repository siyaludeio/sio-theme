import { Provider } from '@angular/core';
import { SIOThemeService } from './services/theme.service';
import { SIOToastrService } from './services/toastr.service';

export interface SIOThemeConfig {
  defaultTheme?: string;
}

export function provideSIOTheme(config: SIOThemeConfig = {}): Provider[] {
  return [
    SIOThemeService,
    SIOToastrService
  ];
}
