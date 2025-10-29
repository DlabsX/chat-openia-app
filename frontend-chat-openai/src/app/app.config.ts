import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

// NgRx
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { chatReducer } from './store/chat.reducer';
import { ChatEffects } from './store/chat.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),

    // Servicios base
    provideHttpClient(withFetch()),

    // NgRx Store y Efectos
    provideStore({ chat: chatReducer }),
    provideEffects(ChatEffects), // ✅ CORREGIDO: sin corchetes
    provideStoreDevtools({ maxAge: 25 }),
  ],
};
