import { Component } from '@angular/core';

import { tabsSvc } from './tabs.svc'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs = tabsSvc.items;
  constructor() {

  }
}
