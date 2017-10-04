import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { appCfg } from '../../system/app.cfg';

@Injectable()
export class compSvc {
  constructor(public http: Http) {
    console.log('Hello by competition svc');
  }

  //get list of garages in Amsterdam
  getCompetitions(){
    let url = appCfg.baseUri + appCfg.apiPoint.competition,
      options = appCfg.getHttpHeader();

    //debugger

    return this.http.get(url, options)
      .map((res)=>{
        //debugger
        let d = res.json();
        return d;
      });
  }
}
