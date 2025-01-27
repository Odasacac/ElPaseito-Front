import { Routes } from '@angular/router';
import { BaseInicioComponent } from './componentes/inicio/base-inicio/base-inicio.component';
import { BotonComenzarComponent } from './componentes/inicio/boton-comenzar/boton-comenzar.component';
import { MenuComponent } from './componentes/inicio/menu/menu.component';
import { ContinuarComponent } from './componentes/inicio/continuar/continuar.component';
import { OpcionesComponent } from './componentes/inicio/opciones/opciones.component';
import { MainComponent } from './componentes/core/main/main.component';
import { Pantalla1Component } from './componentes/pantallas/pantalla-1/pantalla-1.component';
import { RutaIncorrectaComponent } from './componentes/otros/ruta-incorrecta/ruta-incorrecta.component';
import { Pantalla0Component } from './componentes/pantallas/pantalla-0/pantalla-0.component';

export const routes: Routes = 
[
    {
        path: "inicio", 
        component: BaseInicioComponent,
        children:
        [
            {path: "bienvenida", component: BotonComenzarComponent},
            {path: "menu", component: MenuComponent},
            {path: "continuar", component: ContinuarComponent},
            {path: "opciones", component: OpcionesComponent}
        ]  
    },


    {
        path: "game",
        component: MainComponent,
        children:
        [
            { path: "0", component: Pantalla0Component },
            { path: "1", component: Pantalla1Component }
        ]
    },


    {path: "", redirectTo: "/inicio/bienvenida", pathMatch: "full"},

    {path: "**", component: RutaIncorrectaComponent}

];
