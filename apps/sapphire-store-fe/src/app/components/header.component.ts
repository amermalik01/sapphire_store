import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesService } from '../services/themes.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  themeService: ThemesService = inject(ThemesService);

  toggleTheme(){
    this.themeService.updateTheme();
  }
}
