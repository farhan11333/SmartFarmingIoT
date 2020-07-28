import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotorstatusPage } from './motorstatus.page';

describe('MotorstatusPage', () => {
  let component: MotorstatusPage;
  let fixture: ComponentFixture<MotorstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorstatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotorstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
