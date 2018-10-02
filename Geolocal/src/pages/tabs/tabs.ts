import { Component } from '@angular/core';

import { NavegarPage } from '../navegar/navegar';
import { ExplorarPage } from '../explorar/explorar';
import { HomePage } from '../home/home';
import { ContactoPage } from '../contacto/contacto';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NavegarPage;
  tab3Root = ExplorarPage;
  tab4Root = ContactoPage;

  constructor() {

  }
}
