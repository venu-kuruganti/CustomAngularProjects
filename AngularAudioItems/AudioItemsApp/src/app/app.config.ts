import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'; // ✅ Fixes RendererFactory2 issue
import { ModalModule } from 'ngx-bootstrap/modal'; // ✅ Import modal module

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),
    provideAnimations(), 
    importProvidersFrom(ModalModule.forRoot()) ]
};
