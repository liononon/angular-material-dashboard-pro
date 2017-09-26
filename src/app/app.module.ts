import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';

import { ServicesModule } from './services/services.module';
import { LocalStorage } from './utils/local.storage';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        ServicesModule.forRoot(),
        SharedModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent
    ],
    providers: [
        LocalStorage,
        { 
            provide: LocationStrategy, 
            useClass: HashLocationStrategy 
        },
        {
          provide: 'BASE_CONFIG',
          useValue: {
            uri: 'http://tp5.cn/api/v1'
          }
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
