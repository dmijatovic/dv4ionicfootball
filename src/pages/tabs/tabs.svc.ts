
import {
    AboutPage,CompetitionPage,
    ContactPage, GamesPage,
    HomePage, PlayersPage
} from '../index';

export const tabsSvc={
    items:[{
        tabTitle:'Home', tabIcon:'home', component: HomePage
    },{
        tabTitle:'Competitions', tabIcon:'albums', component: CompetitionPage
    },{
        tabTitle:'Games', tabIcon:'alarm', component: GamesPage
    },{
        tabTitle:'Players', tabIcon:'people', component: PlayersPage
    }]
}
