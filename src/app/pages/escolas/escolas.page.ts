import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadescolaPage } from '../cadescola/cadescola.page';
import { Escola } from 'src/app/interfaces/escola';
import { EscolaService } from 'src/app/services/escola.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.page.html',
  styleUrls: ['./escolas.page.scss'],
})
export class EscolasPage implements OnInit {

  escolas = new Array<Escola>();
  private escolaSubscription: Subscription;   

  constructor(
    private modalController: ModalController,
    private escolaService: EscolaService
  ) { 

  }

  ngOnInit() {
    this.escolaSubscription = this.escolaService.getEscolas().subscribe(data => {
      this.escolas = data;

      this.escolas.sort((a,b) => {
        return  a.nomeEscola < b.nomeEscola ? -1 : 1;
      });

    });
  }

  ngOndestroy() {
    if(this.escolaSubscription) this.escolaSubscription.unsubscribe();
  }

  async cadastrarEscola(){
    const modal = await this.modalController.create({
      component: CadescolaPage
    });
 
    return await modal.present();
  }

  async editarEscola(id: string){
    const modal = await this.modalController.create({
      component: CadescolaPage,
      componentProps: { "id" : id  }
    });

    return await modal.present();
  }

}
