import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Info1Page } from '../info1/info1';

@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html'
})
export class ExplorarPage {

  miLista = [];


  constructor(public navCtrl: NavController) {

    this.miLista = [
      {
        'title': 'Compras',
        'icon': 'md-cart',
        'description': 'Turismo de compras.',
        'color': '#FA5858'
      },
      {
        'title': 'Gastronomía',
        'icon': 'md-restaurant',
        'description': 'Turismo gastronómico y enológico.',
        'color': '#78BD43'
      },
      {
        'title': 'Ocio',
        'icon': 'ios-color-palette',
        'description': 'Turismo cultural, teatros, galerias de arte...',
        'color': '#F7D358'
      },
      {
        'title': 'Lugares de interés',
        'icon': 'ios-images',
        'description': 'Principales lugares de interés, patrimonio etc...',
        'color': '#0CA9EA'
      },
      {
        'title': 'Eventos',
        'icon': 'ios-bonfire',
        'description': 'Acontecimientos interesantes, jornadas y eventos.',
        'color': '#F46529'
      },
      {
        'title': 'Starlight',
        'icon': 'md-planet',
        'description': 'Turismo estelar.',
        'color': '#D0A9F5'
      },
      
    ]

  }

  openNavDetailsPage(item) 
  {
    this.navCtrl.push(Info1Page, {item: item});
  }
}
