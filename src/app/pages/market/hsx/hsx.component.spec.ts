import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HsxComponent } from "./hsx.component";

describe("HsxComponent", () => {
  let component: HsxComponent;
  let fixture: ComponentFixture<HsxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HsxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
