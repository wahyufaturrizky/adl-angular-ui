import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFlatComponent } from './button-flat.component';

describe('ButtonFlatComponent', () => {
  let component: ButtonFlatComponent;
  let fixture: ComponentFixture<ButtonFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
