import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {httpTokenInterceptor} from './services/interceptor/http-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withFetch(),
      withInterceptors([httpTokenInterceptor])
    ),
    provideRouter(routes),
    provideClientHydration(withEventReplay())]
};

