import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadturmaPage } from './cadturma.page';

describe('CadturmaPage', () => {
  let component: CadturmaPage;
  let fixture: ComponentFixture<CadturmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadturmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadturmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
