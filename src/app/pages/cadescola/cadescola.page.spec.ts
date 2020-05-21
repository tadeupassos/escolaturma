import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadescolaPage } from './cadescola.page';

describe('CadescolaPage', () => {
  let component: CadescolaPage;
  let fixture: ComponentFixture<CadescolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadescolaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadescolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
