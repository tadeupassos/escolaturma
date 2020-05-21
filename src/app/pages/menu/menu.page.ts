import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Escolas',
      url: '/menu/escolas'
    },
    {
      title: 'Turmas',
      url: '/menu/turmas'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
