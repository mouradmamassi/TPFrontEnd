import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncartsPressesComponent } from './encarts-presses.component';

describe('EncartsPressesComponent', () => {
  let component: EncartsPressesComponent;
  let fixture: ComponentFixture<EncartsPressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncartsPressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncartsPressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
