import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


fetch('./assets/config.json')
  .then(async res => {
    const configuration = await res.json();
    const providers = [
      { provide: 'CONFIGURATION', useValue: configuration },
      { provide: 'API_URL', useValue: configuration.apiConfig.baseUrl }
    ];

    platformBrowserDynamic(providers).bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });