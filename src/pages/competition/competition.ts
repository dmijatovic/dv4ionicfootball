import { Component, OnInit } from '@angular/core';
import { 
  NavController, NavParams 
} from 'ionic-angular';

import { compSvc } from './competition.svc';

import { StandsPage } from '../index';

@Component({
  selector: 'page-competition',
  templateUrl: 'competition.html',
  //styleUrls:['competition.scss'],
  providers:[ compSvc ]
})
export class CompetitionPage implements OnInit {
  pageTitle="Competitions";
  //list of competitions
  competitions:any;
  //loader state
  loader:boolean=true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data: compSvc) {
  }

  ngOnInit(){
    console.log("Competition component start");
    this.data.getCompetitions()
      .subscribe((d)=>{
        console.log(d);
        this.competitions = d;
      },(e)=>{
        console.error(e)
      },()=>{
        this.loader=false;
      }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionPage');
  }

  itemSelected($item){
    //console.log($item);
    //add level down
    this.navCtrl.push(StandsPage,{'competition':$item});
  }

}
