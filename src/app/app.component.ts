import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponenteUmComponent } from './components/componente-um/componente-um.component';
import { ComponenteDoisComponent } from './components/componente-dois/componente-dois.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    // Meus components:
    ComponenteUmComponent,
    ComponenteDoisComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste';
}
