
//angular
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; 
//ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//main local app entry component
import { MyApp } from './app.component';
//all pages defined in 'barrel' 
import {
  TabsPage, HomePage, CompetitionPage,
  GamesPage, PlayersPage, StandsPage,
  TeamPage
} from '../pages';


@NgModule({
  declarations: [
    MyApp, TabsPage,
    HomePage,CompetitionPage,
    GamesPage, PlayersPage, 
    StandsPage, TeamPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, TabsPage,
    HomePage,CompetitionPage,
    GamesPage, PlayersPage,
    StandsPage, TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
