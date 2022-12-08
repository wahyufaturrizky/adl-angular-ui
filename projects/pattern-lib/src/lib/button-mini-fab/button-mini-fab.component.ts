import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-mini-fab',
  templateUrl: './button-mini-fab.component.html',
  styleUrls: ['./button-mini-fab.component.scss'],
})
export class ButtonMiniFabComponent implements OnInit {
  constructor() {}

  @Input() iconName: string | null = 'favorite';
  @Input() ariaLabel: string | null = 'Example icon-button';
  @Input() color: ThemePalette = 'primary';
  @Input() matTooltip: string = 'Tooltip text goes here';
  @Input() disabled: boolean = false;
  @Output() eventChange: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit(): void {}

  onEventChange(event: Event) {
    this.eventChange.emit(event);
  }
}
