import { Routes } from '@angular/router';
import { BaseInicioComponent } from './componentes/inicio/base-inicio/base-inicio.component';
import { BotonComenzarComponent } from './componentes/inicio/boton-comenzar/boton-comenzar.component';
import { MenuComponent } from './componentes/inicio/menu/menu.component';
import { ContinuarComponent } from './componentes/inicio/continuar/continuar.component';
import { OpcionesComponent } from './componentes/inicio/opciones/opciones.component';
import { MainComponent } from './componentes/core/main/main.component';

import { RutaIncorrectaComponent } from './componentes/otros/ruta-incorrecta/ruta-incorrecta.component';
import { RutaNopermitidaComponent } from './componentes/otros/ruta-nopermitida/ruta-nopermitida.component';

import { Pantalla0Component } from './componentes/pantallas/pantallas/pantalla-0/pantalla-0.component';

import { AbandonoComponent } from './componentes/pantallas/pantallas/abandono/abandono.component';
import { NotdefinedComponent } from './componentes/pantallas/pantallas/notdefined/notdefined.component';


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
            /*
            Aqui ir poniendo:
            
            { path: "A", component: PantallaAComponent },
            */

            //----------------


            






           //----------------
        
            { path: "abandono", component: AbandonoComponent },
            { path: "notdefined", component: NotdefinedComponent}
        ]
    },


    {path: "", redirectTo: "/inicio/bienvenida", pathMatch: "full"},

    {path: "nopermitida", component: RutaNopermitidaComponent},

    {path: "**", component: RutaIncorrectaComponent}

];
