import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Buffer } from 'buffer';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  (window as any).Buffer = Buffer;