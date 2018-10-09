import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { FuntionsPage} from '../pages/funtions/funtions';
import {LibraryPage} from '../pages/library/library';
import {JapjiPage} from '../pages/japji/japji';
import {VisionPage} from '../pages/vision/vision';
import {AffiliatedPage} from '../pages/affiliated/affiliated';

import {AboutGurmukhiPage} from '../pages/about-gurmukhi/about-gurmukhi';
import {AboutGriPage} from '../pages/about-gri/about-gri';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FuntionsPage,
    LibraryPage,
    JapjiPage,
    AboutGurmukhiPage,
    AboutGriPage,
    VisionPage,
    AffiliatedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FuntionsPage,
    LibraryPage,
    JapjiPage,
     AboutGurmukhiPage,
    AboutGriPage,
    VisionPage,
    AffiliatedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
   myIcon: string = "home";
}



