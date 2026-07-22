import { Injectable, signal, effect } from '@angular/core';

export type SIOThemeName = 'default' | 'dark' | 'cosmic' | 'corporate';

@Injectable({
  providedIn: 'root'
})
export class SIOThemeService {
  readonly currentTheme = signal<SIOThemeName>('default');

  constructor() {
    const saved = (localStorage.getItem('app_theme') as SIOThemeName) || 'default';
    this.currentTheme.set(saved);

    effect(() => {
      const theme = this.currentTheme();
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app_theme', theme);
    });
  }

  changeTheme(themeName: SIOThemeName): void {
    this.currentTheme.set(themeName);
  }
}
