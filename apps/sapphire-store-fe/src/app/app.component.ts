import { Component, signal, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { ThemesService } from './services/themes.service';
import { HeaderComponent } from './components/header/header.component';
// import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sapphire-store-fe';

  darkMode = signal<boolean>(false);
  
  themeService: ThemesService = inject(ThemesService);
}
