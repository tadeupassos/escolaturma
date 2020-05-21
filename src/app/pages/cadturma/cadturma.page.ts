import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Turma } from 'src/app/interfaces/turma';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { TurmaService } from 'src/app/services/turma.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { EscolaService } from 'src/app/services/escola.service';
import { Escola } from 'src/app/interfaces/escola';

@Component({
  selector: 'app-cadturma',
  templateUrl: './cadturma.page.html',
  styleUrls: ['./cadturma.page.scss'],
})
export class CadturmaPage implements OnInit {

  fGroup: FormGroup;

  private turma: Turma = {};
  private turmaId: string = null;
  private turmaSubscription: Subscription;   
  private titulo: string = null;
  escolas = new Array<Escola>();
  private escolaSubscription: Subscription;  

  constructor(
    private fBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private modalController: ModalController,
    private turmaService: TurmaService,
    private servicos: ServicosService,
    private navParams: NavParams,
    private escolaService: EscolaService
  ) { 

    this.fGroup = this.fBuilder.group({
      'nomeTurma': ['', Validators.compose([Validators.required])],
      'descricao': ['', Validators.compose([Validators.required])],
      'nomeEscola': ['', Validators.compose([Validators.required])],
    });

  }

  ngOnInit() {

    this.escolaSubscription = this.escolaService.getEscolas().subscribe(data => {
      this.escolas = data;

      this.escolas.sort((a,b) => {
        return  a.nomeEscola < b.nomeEscola ? -1 : 1;
      });

    });

    this.titulo = "Cadastrar";
    this.turmaId = this.navParams.data.id;
    if(this.turmaId) this.loadTurma();
  }

  ngOndestroy() {
    if(this.turmaSubscription) this.turmaSubscription.unsubscribe();
    if(this.escolaSubscription) this.escolaSubscription.unsubscribe();
  }

  loadTurma(){
    this.titulo = "Editar";
    this.turmaSubscription = this.turmaService.getTurma(this.turmaId).subscribe((turma:Turma) => {
      this.fGroup.get('nomeTurma').setValue(turma.nomeTurma);
      this.fGroup.get('descricao').setValue(turma.descricao);
      this.fGroup.get('nomeEscola').setValue(turma.nomeEscola);
    });
  }

  async gravar(){
    await this.servicos.presentLoading();
    this.turma = this.fGroup.value;

    if(this.turmaId){
      try {
        await this.turmaService.updateTurma(this.turmaId, this.turma);
        await this.servicos.loading.dismiss();
        await this.fechar();
      } catch (error) {
        this.servicos.presentToast('Erro ao tentar salvar');
        this.servicos.loading.dismiss();
      }
    }else{
      try {
        await this.turmaService.addTurma(this.turma);
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
