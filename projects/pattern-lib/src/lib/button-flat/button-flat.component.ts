import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-flat',
  templateUrl: './button-flat.component.html',
  styleUrls: ['./button-flat.component.scss'],
})
export class ButtonFlatComponent implements OnInit {
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
