import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/interfaces/turma';
import { TurmaService } from 'src/app/services/turma.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { CadturmaPage } from '../cadturma/cadturma.page';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit {

  turmas = new Array<Turma>();
  private turmaSubscription: Subscription;

  constructor(
    private modalController: ModalController,
    private turmaSevice: TurmaService
  ) { 

  }

  ngOnInit() {
    this.turmaSubscription = this.turmaSevice.getTurmas().subscribe(data => {
      this.turmas = data;
    });

  }

  ngOndestroy() {
    if(this.turmaSubscription) this.turmaSubscription.unsubscribe();
  }

  async cadastrarTurma(){
    const modal = await this.modalController.create({
      component: CadturmaPage
    });
 
    return await modal.present();
  }

  async editarTurma(id: string){
    const modal = await this.modalController.create({
      component: CadturmaPage,
      componentProps: { "id" : id  }
    });

    return await modal.present();
  }

}
