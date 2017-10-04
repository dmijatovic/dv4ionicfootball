import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { appCfg } from '../../system/app.cfg';

@Injectable()
export class dataSvc {
  constructor(public http: Http) {
    console.log('Hello by team svc');
  }

  getTeamInfo(url:string){
    let options = appCfg.getHttpHeader();

    //debugger

    return this.http.get(url, options)
      .map((res)=>{
        //debugger
        let d = res.json();
        return d;
      });
  }
}
