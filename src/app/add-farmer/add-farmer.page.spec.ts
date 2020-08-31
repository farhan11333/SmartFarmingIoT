import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFarmerPage } from './add-farmer.page';

describe('AddFarmerPage', () => {
  let component: AddFarmerPage;
  let fixture: ComponentFixture<AddFarmerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFarmerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFarmerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
