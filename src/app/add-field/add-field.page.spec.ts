import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AddFieldPage } from "./add-field.page";

describe("AddFieldPage", () => {
  let component: AddFieldPage;
  let fixture: ComponentFixture<AddFieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddFieldPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
