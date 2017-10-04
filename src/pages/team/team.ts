import { Component,  OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { dataSvc } from './team.svc';

@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
  providers:[dataSvc]
})
export class TeamPage implements OnInit {
  pageTitle:string;
  teamStand:any;
  team={
    code:null,
    crestUrl:null,
    name:null,
    shortName:null,
    squadMarketValue:null
  };
  imgUrl:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data:dataSvc) {

      this.teamStand = navParams.get('teamStand')

  }

  ngOnInit(){
    if (this.teamStand){
      //set page title 
      this.pageTitle=this.teamStand.teamName;
      //debugger
      if (this.teamStand._links.team.href){
        this.data.getTeamInfo(this.teamStand._links.team.href)
        .subscribe((d)=>{
          console.log(d);
          //debugger
          this.team = d;
          this.imgUrl = this.team.crestUrl;
        })
      }else{
        console.error("Teamlink missing!",this.teamStand);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandsPage');
  }

  showPlayers(team){
    console.log("Show players",team);
  }
  showSchedule(team){
    console.log("Show players",team);
  }
  
}
