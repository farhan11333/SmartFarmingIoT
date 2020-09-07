import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletePopoverPage } from './delete-popover.page';

describe('DeletePopoverPage', () => {
  let component: DeletePopoverPage;
  let fixture: ComponentFixture<DeletePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
