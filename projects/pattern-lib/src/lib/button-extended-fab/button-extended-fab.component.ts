import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-extended-fab',
  templateUrl: './button-extended-fab.component.html',
  styleUrls: ['./button-extended-fab.component.scss'],
})
export class ButtonExtendedFabComponent implements OnInit {
  constructor() {}

  @Input() iconName: string | null = 'favorite';
  @Input() label: string | null = 'Text goes here';
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
