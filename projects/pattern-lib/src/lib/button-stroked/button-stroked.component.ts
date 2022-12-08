import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.scss'],
})
export class ButtonStrokedComponent implements OnInit {
  constructor() {}

  @Input() label: string | null = 'Text goes here';
  @Input() color: ThemePalette = 'primary';
  @Input() disabled: boolean = false;
  @Output() eventChange: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit(): void {}

  onEventChange(event: Event) {
    this.eventChange.emit(event);
  }
}
