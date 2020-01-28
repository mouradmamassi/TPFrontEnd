import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediathequePaginationComponent } from './mediatheque-pagination.component';

describe('MediathequePaginationComponent', () => {
  let component: MediathequePaginationComponent;
  let fixture: ComponentFixture<MediathequePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediathequePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediathequePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
