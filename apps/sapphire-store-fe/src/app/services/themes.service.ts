import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  windowValue = '';

  darkModeSignal = signal<string>(this.windowValue);

  constructor() {
    if (typeof window !== 'undefined') {
      effect(() => {
        window.localStorage.setItem(
          'darkModeSignal',
          JSON.stringify(this.darkModeSignal())
        );
      });

      this.windowValue = JSON.parse(
        window.localStorage.getItem('darkModeSignal') ?? 'null'
      );
    }
  }

  updateTheme() {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'null' : 'dark'));
  }
}
