import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escola } from 'src/app/interfaces/escola';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { EscolaService } from 'src/app/services/escola.service';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-cadescola',
  templateUrl: './cadescola.page.html',
  styleUrls: ['./cadescola.page.scss'],
})
export class CadescolaPage implements OnInit {

  fGroup: FormGroup;

  private escola: Escola = {};
  private escolaId: string = null;
  private escolaSubscription: Subscription;   
  private titulo: string = null;

  constructor(
    private fBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private modalController: ModalController,
    private escolaService: EscolaService,
    private servicos: ServicosService,
    private navParams: NavParams
  ) { 

    this.fGroup = this.fBuilder.group({
      'nomeEscola': ['', Validators.compose([Validators.required])],
      'descricao': ['', Validators.compose([Validators.required])],
    });

  }

  ngOnInit() {
    this.titulo = "Cadastrar";
    this.escolaId = this.navParams.data.id;
    if(this.escolaId) this.loadEscola();
  }

  ngOndestroy() {
    if(this.escolaSubscription) this.escolaSubscription.unsubscribe();
  }

  loadEscola(){
    this.titulo = "Editar";
    this.escolaSubscription = this.escolaService.getEscola(this.escolaId).subscribe((escola:Escola) => {
      this.fGroup.get('nomeEscola').setValue(escola.nomeEscola);
      this.fGroup.get('descricao').setValue(escola.descricao);
    });
  }

  async gravar(){
    await this.servicos.presentLoading();
    this.escola = this.fGroup.value;

    if(this.escolaId){
      try {
        await this.escolaService.updateEscola(this.escolaId, this.escola);
        await this.servicos.loading.dismiss();
        await this.fechar();
      } catch (error) {
        this.servicos.presentToast('Erro ao tentar salvar');
        this.servicos.loading.dismiss();
      }
    }else{
      try {
        await this.escolaService.addEscola(this.escola);
        await this.servicos.loading.dismiss();
        await this.fechar();
      } catch (error) {
        this.servicos.presentToast('Erro ao tentar salvar');
        this.servicos.loading.dismiss();
      }
    }
  }

  async fechar(){
    await this.modalController.dismiss();
  }

}
