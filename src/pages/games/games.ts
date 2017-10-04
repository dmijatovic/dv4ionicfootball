import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {
  competition:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      
      //get compeition
      this.competition = navParams.get('competition')

  }

  ionViewDidLoad() {
    console.log(this.competition);
    console.log('ionViewDidLoad GamesPage');
  }

}
