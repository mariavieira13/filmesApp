import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrgulhoEPrconceitoPage } from './orgulho-e-prconceito.page';

describe('OrgulhoEPrconceitoPage', () => {
  let component: OrgulhoEPrconceitoPage;
  let fixture: ComponentFixture<OrgulhoEPrconceitoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgulhoEPrconceitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrgulhoEPrconceitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
