import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PantallasService } from '../../../servicios/pantallas.service';
import { RutaNopermitidaComponent } from "../../otros/ruta-nopermitida/ruta-nopermitida.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RutaNopermitidaComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent 
{
  pantallasService = inject(PantallasService);
  visible = this.pantallasService.getVisible();
}
