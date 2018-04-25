import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {FavouritesPage} from '../pages/favourites/favourites'
import { LibrariesPage } from '../pages/libraries/libraries';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesPage } from '../pages/quotes/quotes';
import { QuotePage } from '../pages/quote/quote';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService} from '../services/quotes';

@NgModule({
  declarations: [
   FavouritesPage,
   LibrariesPage,
   SettingsPage,
   QuotesPage,
   QuotePage,
   TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritesPage,
    LibrariesPage,
    SettingsPage,
    QuotesPage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService
  ]
})
export class AppModule {}
