import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSmartdevicesPage } from './add-smartdevices.page';

describe('AddSmartdevicesPage', () => {
  let component: AddSmartdevicesPage;
  let fixture: ComponentFixture<AddSmartdevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSmartdevicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSmartdevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
