import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PincersComponent } from './pincers.component';

describe('PincersComponent', () => {
  let component: PincersComponent;
  let fixture: ComponentFixture<PincersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PincersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PincersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
