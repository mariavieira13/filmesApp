import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneDirectionWhereWeArePage } from './one-direction-where-we-are.page';

describe('OneDirectionWhereWeArePage', () => {
  let component: OneDirectionWhereWeArePage;
  let fixture: ComponentFixture<OneDirectionWhereWeArePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDirectionWhereWeArePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneDirectionWhereWeArePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
