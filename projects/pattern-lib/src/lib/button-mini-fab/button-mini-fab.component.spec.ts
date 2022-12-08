import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMiniFabComponent } from './button-mini-fab.component';

describe('ButtonMiniFabComponent', () => {
  let component: ButtonMiniFabComponent;
  let fixture: ComponentFixture<ButtonMiniFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonMiniFabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMiniFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
