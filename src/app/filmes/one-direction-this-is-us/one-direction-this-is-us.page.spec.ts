import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneDirectionThisIsUsPage } from './one-direction-this-is-us.page';

describe('OneDirectionThisIsUsPage', () => {
  let component: OneDirectionThisIsUsPage;
  let fixture: ComponentFixture<OneDirectionThisIsUsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDirectionThisIsUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneDirectionThisIsUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
