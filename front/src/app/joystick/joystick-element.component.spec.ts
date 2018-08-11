import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickElementComponent } from './joystick-element.component';

describe('JoystickElementComponent', () => {
  let component: JoystickElementComponent;
  let fixture: ComponentFixture<JoystickElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
