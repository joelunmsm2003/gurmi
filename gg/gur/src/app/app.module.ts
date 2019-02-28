import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { FuntionsPage} from '../pages/funtions/funtions';
import {LibraryPage} from '../pages/library/library';
import {JapjiPage} from '../pages/japji/japji';
import {JapjimusicPage} from '../pages/japjimusic/japjimusic';
import {AboutjapjimusicPage} from '../pages/aboutjapjimusic/aboutjapjimusic';
import {VisionPage} from '../pages/vision/vision';
import {FoundersPage} from '../pages/founders/founders';
import {AffiliatedPage} from '../pages/affiliated/affiliated';


import {AboutGurmukhiPage} from '../pages/about-gurmukhi/about-gurmukhi';
import {AboutGriPage} from '../pages/about-gri/about-gri';
import {MantraPage} from '../pages/mantra/mantra';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FuntionsPage,
    LibraryPage,
    JapjiPage,
    AboutGurmukhiPage,
    AboutGriPage,
    VisionPage,
    FoundersPage,
    AffiliatedPage,
    MantraPage,
    JapjimusicPage,
    AboutjapjimusicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FuntionsPage,
    LibraryPage,
    JapjiPage,
    AboutGurmukhiPage,
    AboutGriPage,
    VisionPage,
    FoundersPage,
    AffiliatedPage,
    MantraPage,
    JapjimusicPage,
    AboutjapjimusicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
