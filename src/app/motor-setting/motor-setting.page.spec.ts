import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotorSettingPage } from './motor-setting.page';

describe('MotorSettingPage', () => {
  let component: MotorSettingPage;
  let fixture: ComponentFixture<MotorSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorSettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotorSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
