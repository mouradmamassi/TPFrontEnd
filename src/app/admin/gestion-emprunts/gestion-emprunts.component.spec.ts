import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpruntsComponent } from './gestion-emprunts.component';

describe('GestionEmpruntsComponent', () => {
  let component: GestionEmpruntsComponent;
  let fixture: ComponentFixture<GestionEmpruntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEmpruntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEmpruntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
