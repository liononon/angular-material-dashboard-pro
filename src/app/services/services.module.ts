
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        BaseService  
      ]
    }
  }
 }