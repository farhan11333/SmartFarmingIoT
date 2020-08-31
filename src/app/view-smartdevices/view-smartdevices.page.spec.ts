import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSmartdevicesPage } from './view-smartdevices.page';

describe('ViewSmartdevicesPage', () => {
  let component: ViewSmartdevicesPage;
  let fixture: ComponentFixture<ViewSmartdevicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSmartdevicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSmartdevicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
