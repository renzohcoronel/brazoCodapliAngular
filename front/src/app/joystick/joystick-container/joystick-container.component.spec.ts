import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoystickContainerComponent } from './joystick-container.component';

describe('JoystickContainerComponent', () => {
  let component: JoystickContainerComponent;
  let fixture: ComponentFixture<JoystickContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoystickContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoystickContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
