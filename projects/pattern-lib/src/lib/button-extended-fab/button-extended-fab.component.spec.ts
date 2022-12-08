import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExtendedFabComponent } from './button-extended-fab.component';

describe('ButtonExtendedFabComponent', () => {
  let component: ButtonExtendedFabComponent;
  let fixture: ComponentFixture<ButtonExtendedFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonExtendedFabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonExtendedFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
