/* 
Redux es un contenedor predecible del estado de aplicaciones JavaScript. 
Ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar.

El store es el objeto que contiene el estado de la aplicación. 
Es el único lugar donde se almacena el estado de la aplicación.
*/

import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});
