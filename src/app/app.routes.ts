import { Routes } from '@angular/router';
import { BaseInicioComponent } from './componentes/inicio/base-inicio/base-inicio.component';
import { BotonComenzarComponent } from './componentes/inicio/boton-comenzar/boton-comenzar.component';
import { MenuComponent } from './componentes/inicio/menu/menu.component';
import { ContinuarComponent } from './componentes/inicio/continuar/continuar.component';
import { OpcionesComponent } from './componentes/inicio/opciones/opciones.component';
import { MainComponent } from './componentes/core/main/main.component';

import { RutaIncorrectaComponent } from './componentes/otros/ruta-incorrecta/ruta-incorrecta.component';
import { RutaNopermitidaComponent } from './componentes/otros/ruta-nopermitida/ruta-nopermitida.component';

import { Pantalla1Component } from './componentes/pantallas/listaPantallas/pantalla-1/pantalla-1.component';
import { Pantalla0Component } from './componentes/pantallas/listaPantallas/pantalla-0/pantalla-0.component';
import { AbandonoComponent } from './componentes/pantallas/listaPantallas/abandono/abandono.component';
import { NotdefinedComponent } from './componentes/pantallas/listaPantallas/notdefined/notdefined.component';
import { Pantalla2Component } from './componentes/pantallas/listaPantallas/pantalla-2/pantalla-2.component';
import { Pantalla3Component } from './componentes/pantallas/listaPantallas/pantalla-3/pantalla-3.component';
import { Pantalla4Component } from './componentes/pantallas/listaPantallas/pantalla-4/pantalla-4.component';
import { Pantalla5Component } from './componentes/pantallas/listaPantallas/pantalla-5/pantalla-5.component';
import { Pantalla6Component } from './componentes/pantallas/listaPantallas/pantalla-6/pantalla-6.component';
import { Pantalla7Component } from './componentes/pantallas/listaPantallas/pantalla-7/pantalla-7.component';
import { Pantalla8Component } from './componentes/pantallas/listaPantallas/pantalla-8/pantalla-8.component';
import { Pantalla9Component } from './componentes/pantallas/listaPantallas/pantalla-9/pantalla-9.component';
import { Pantalla10Component } from './componentes/pantallas/listaPantallas/pantalla-10/pantalla-10.component';
import { Pantalla11Component } from './componentes/pantallas/listaPantallas/pantalla-11/pantalla-11.component';
import { Pantalla12Component } from './componentes/pantallas/listaPantallas/pantalla-12/pantalla-12.component';
import { Pantalla13Component } from './componentes/pantallas/listaPantallas/pantalla-13/pantalla-13.component';
import { Pantalla14Component } from './componentes/pantallas/listaPantallas/pantalla-14/pantalla-14.component';
import { Pantalla15Component } from './componentes/pantallas/listaPantallas/pantalla-15/pantalla-15.component';
import { Pantalla16Component } from './componentes/pantallas/listaPantallas/pantalla-16/pantalla-16.component';
import { Pantalla17Component } from './componentes/pantallas/listaPantallas/pantalla-17/pantalla-17.component';
import { Pantalla18Component } from './componentes/pantallas/listaPantallas/pantalla-18/pantalla-18.component';
import { Pantalla19Component } from './componentes/pantallas/listaPantallas/pantalla-19/pantalla-19.component';
import { Pantalla20Component } from './componentes/pantallas/listaPantallas/pantalla-20/pantalla-20.component';
import { Pantalla21Component } from './componentes/pantallas/listaPantallas/pantalla-21/pantalla-21.component';
import { Pantalla22Component } from './componentes/pantallas/listaPantallas/pantalla-22/pantalla-22.component';
import { Pantalla23Component } from './componentes/pantallas/listaPantallas/pantalla-23/pantalla-23.component';
import { Pantalla24Component } from './componentes/pantallas/listaPantallas/pantalla-24/pantalla-24.component';
import { Pantalla25Component } from './componentes/pantallas/listaPantallas/pantalla-25/pantalla-25.component';
import { Pantalla26Component } from './componentes/pantallas/listaPantallas/pantalla-26/pantalla-26.component';
import { Pantalla27Component } from './componentes/pantallas/listaPantallas/pantalla-27/pantalla-27.component';
import { Pantalla28Component } from './componentes/pantallas/listaPantallas/pantalla-28/pantalla-28.component';
import { Pantalla29Component } from './componentes/pantallas/listaPantallas/pantalla-29/pantalla-29.component';
import { Pantalla30Component } from './componentes/pantallas/listaPantallas/pantalla-30/pantalla-30.component';
import { Pantalla31Component } from './componentes/pantallas/listaPantallas/pantalla-31/pantalla-31.component';
import { Pantalla32Component } from './componentes/pantallas/listaPantallas/pantalla-32/pantalla-32.component';
import { Pantalla33Component } from './componentes/pantallas/listaPantallas/pantalla-33/pantalla-33.component';
import { Pantalla34Component } from './componentes/pantallas/listaPantallas/pantalla-34/pantalla-34.component';
import { Pantalla35Component } from './componentes/pantallas/listaPantallas/pantalla-35/pantalla-35.component';
import { Pantalla36Component } from './componentes/pantallas/listaPantallas/pantalla-36/pantalla-36.component';
import { Pantalla37Component } from './componentes/pantallas/listaPantallas/pantalla-37/pantalla-37.component';
import { Pantalla38Component } from './componentes/pantallas/listaPantallas/pantalla-38/pantalla-38.component';
import { Pantalla39Component } from './componentes/pantallas/listaPantallas/pantalla-39/pantalla-39.component';
import { Pantalla40Component } from './componentes/pantallas/listaPantallas/pantalla-40/pantalla-40.component';
import { Pantalla41Component } from './componentes/pantallas/listaPantallas/pantalla-41/pantalla-41.component';
import { Pantalla42Component } from './componentes/pantallas/listaPantallas/pantalla-42/pantalla-42.component';
import { Pantalla43Component } from './componentes/pantallas/listaPantallas/pantalla-43/pantalla-43.component';


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
            { path: "24", component: Pantalla24Component },
            { path: "25", component: Pantalla25Component },
            { path: "26", component: Pantalla26Component },
            { path: "27", component: Pantalla27Component },
            { path: "28", component: Pantalla28Component },
            { path: "29", component: Pantalla29Component },
            { path: "30", component: Pantalla30Component },
            { path: "31", component: Pantalla31Component },
            { path: "32", component: Pantalla32Component },
            { path: "33", component: Pantalla33Component },
            { path: "34", component: Pantalla34Component },
            { path: "35", component: Pantalla35Component },
            { path: "36", component: Pantalla36Component },
            { path: "37", component: Pantalla37Component },
            { path: "38", component: Pantalla38Component },
            { path: "39", component: Pantalla39Component },
            { path: "40", component: Pantalla40Component },
            { path: "41", component: Pantalla41Component },
            { path: "42", component: Pantalla42Component },
            { path: "43", component: Pantalla43Component },





           //----------------
        
            { path: "abandono", component: AbandonoComponent },
            { path: "notdefined", component: NotdefinedComponent}
        ]
    },


    {path: "", redirectTo: "/inicio/bienvenida", pathMatch: "full"},

    {path: "nopermitida", component: RutaNopermitidaComponent},

    {path: "**", component: RutaIncorrectaComponent}

];
