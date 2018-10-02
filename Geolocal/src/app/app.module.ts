import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NavegarPage } from '../pages/navegar/navegar';
import { ExplorarPage } from '../pages/explorar/explorar';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactoPage } from '../pages/contacto/contacto';
import { Info1Page } from '../pages/info1/info1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NavegarPage,
    ExplorarPage,
    HomePage,
    TabsPage,
    ContactoPage,
    Info1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NavegarPage,
    ExplorarPage,
    HomePage,
    TabsPage,
    ContactoPage,
    Info1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
