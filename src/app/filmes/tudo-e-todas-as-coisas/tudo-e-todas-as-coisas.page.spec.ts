import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TudoETodasAsCoisasPage } from './tudo-e-todas-as-coisas.page';

describe('TudoETodasAsCoisasPage', () => {
  let component: TudoETodasAsCoisasPage;
  let fixture: ComponentFixture<TudoETodasAsCoisasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TudoETodasAsCoisasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TudoETodasAsCoisasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
