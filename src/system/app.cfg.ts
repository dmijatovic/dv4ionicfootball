import { RequestOptions, Headers } from '@angular/http';

//export some defintions?!?
export const appCfg={
    baseUri:'http://api.football-data.org/v1/',
    apiPoint:{
        competition:'competitions',
        stand:'leagueTable'
    },
    //create request header
    //and include token key
    getHttpHeader(){
        let options=new RequestOptions({
            headers: new Headers({
                "X-Auth-Token":"17f7832838f1432b809895e3c6b352a9",
                "Accept":"application/json; charset=UTF-8"
            })
        });
        return options;
    },
}