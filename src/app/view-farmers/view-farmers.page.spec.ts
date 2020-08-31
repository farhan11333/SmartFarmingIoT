import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewFarmersPage } from './view-farmers.page';

describe('ViewFarmersPage', () => {
  let component: ViewFarmersPage;
  let fixture: ComponentFixture<ViewFarmersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFarmersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFarmersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
