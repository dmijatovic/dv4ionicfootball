import { Component,  OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { standSvc } from './stands.svc';
import { TeamPage } from '../index';

@Component({
  selector: 'page-stands',
  templateUrl: 'stands.html',
  providers:[standSvc]
})
export class StandsPage implements OnInit{
  pageTitle:string;
  competition:any;
  standing:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data:standSvc) {

      this.competition = navParams.get('competition')
  }

  ngOnInit(){
    if (this.competition){
      //set page title 
      this.pageTitle=this.competition.caption;
      this.data.getCompetitionStand(this.competition.id)
        .subscribe((d)=>{
          console.log(d);
          this.standing = d.standing;
        })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandsPage');
  }

  clubInfo($item){
    console.log("Clubinfo",$item);
    this.navCtrl.push(TeamPage,{'teamStand':$item});

  }

}
