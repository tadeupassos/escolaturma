import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolasPage } from './escolas.page';

describe('EscolasPage', () => {
  let component: EscolasPage;
  let fixture: ComponentFixture<EscolasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
