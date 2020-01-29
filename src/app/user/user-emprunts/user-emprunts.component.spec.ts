import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmpruntsComponent } from './user-emprunts.component';

describe('UserEmpruntsComponent', () => {
  let component: UserEmpruntsComponent;
  let fixture: ComponentFixture<UserEmpruntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmpruntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmpruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
