import { Routes } from '@angular/router';
import { BaseInicioComponent } from './componentes/inicio/base-inicio/base-inicio.component';
import { BotonComenzarComponent } from './componentes/inicio/boton-comenzar/boton-comenzar.component';
import { MenuComponent } from './componentes/inicio/menu/menu.component';
import { ContinuarComponent } from './componentes/inicio/continuar/continuar.component';
import { OpcionesComponent } from './componentes/inicio/opciones/opciones.component';
import { MainComponent } from './componentes/core/main/main.component';

import { RutaIncorrectaComponent } from './componentes/otros/ruta-incorrecta/ruta-incorrecta.component';
import { AbandonoComponent } from './componentes/pantallas/abandono/abandono.component';
import { RutaNopermitidaComponent } from './componentes/otros/ruta-nopermitida/ruta-nopermitida.component';

import { Pantalla0Component } from './componentes/pantallas/pantallas/pantalla-0/pantalla-0.component';
import { Pantalla1Component } from './componentes/pantallas/pantallas/pantalla-1/pantalla-1.component';
import { Pantalla2Component } from './componentes/pantallas/pantallas/pantalla-2/pantalla-2.component';
import { Pantalla3Component } from './componentes/pantallas/pantallas/pantalla-3/pantalla-3.component';
import { Pantalla4Component } from './componentes/pantallas/pantallas/pantalla-4/pantalla-4.component';
import { Pantalla5Component } from './componentes/pantallas/pantallas/pantalla-5/pantalla-5.component';
import { Pantalla6Component } from './componentes/pantallas/pantallas/pantalla-6/pantalla-6.component';
import { Pantalla7Component } from './componentes/pantallas/pantallas/pantalla-7/pantalla-7.component';
import { Pantalla8Component } from './componentes/pantallas/pantallas/pantalla-8/pantalla-8.component';
import { Pantalla9Component } from './componentes/pantallas/pantallas/pantalla-9/pantalla-9.component';
import { Pantalla10Component } from './componentes/pantallas/pantallas/pantalla-10/pantalla-10.component';
import { Pantalla11Component } from './componentes/pantallas/pantallas/pantalla-11/pantalla-11.component';
import { Pantalla12Component } from './componentes/pantallas/pantallas/pantalla-12/pantalla-12.component';
import { Pantalla13Component } from './componentes/pantallas/pantallas/pantalla-13/pantalla-13.component';
import { Pantalla14Component } from './componentes/pantallas/pantallas/pantalla-14/pantalla-14.component';
import { Pantalla15Component } from './componentes/pantallas/pantallas/pantalla-15/pantalla-15.component';
import { Pantalla16Component } from './componentes/pantallas/pantallas/pantalla-16/pantalla-16.component';
import { Pantalla17Component } from './componentes/pantallas/pantallas/pantalla-17/pantalla-17.component';
import { Pantalla18Component } from './componentes/pantallas/pantallas/pantalla-18/pantalla-18.component';
import { Pantalla19Component } from './componentes/pantallas/pantallas/pantalla-19/pantalla-19.component';
import { Pantalla20Component } from './componentes/pantallas/pantallas/pantalla-20/pantalla-20.component';
import { Pantalla21Component } from './componentes/pantallas/pantallas/pantalla-21/pantalla-21.component';
import { Pantalla22Component } from './componentes/pantallas/pantallas/pantalla-22/pantalla-22.component';
import { Pantalla23Component } from './componentes/pantallas/pantallas/pantalla-23/pantalla-23.component';


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
            { path: "1", component: Pantalla1Component },
            { path: "2", component: Pantalla2Component },
            { path: "3", component: Pantalla3Component },
            { path: "4", component: Pantalla4Component },
            { path: "5", component: Pantalla5Component },
            { path: "6", component: Pantalla6Component },
            { path: "7", component: Pantalla7Component },
            { path: "8", component: Pantalla8Component },
            { path: "9", component: Pantalla9Component },
            { path: "10", component: Pantalla10Component },
            { path: "11", component: Pantalla11Component },
            { path: "12", component: Pantalla12Component },
            { path: "13", component: Pantalla13Component },
            { path: "14", component: Pantalla14Component },
            { path: "15", component: Pantalla15Component },
            { path: "16", component: Pantalla16Component },
            { path: "17", component: Pantalla17Component },
            { path: "18", component: Pantalla18Component },
            { path: "19", component: Pantalla19Component },
            { path: "20", component: Pantalla20Component },
            { path: "21", component: Pantalla21Component },
            { path: "22", component: Pantalla22Component },
            { path: "23", component: Pantalla23Component },
            { path: "abandono", component: AbandonoComponent }
        ]
    },


    {path: "", redirectTo: "/inicio/bienvenida", pathMatch: "full"},

    {path: "nopermitida", component: RutaNopermitidaComponent},

    {path: "**", component: RutaIncorrectaComponent}

];
