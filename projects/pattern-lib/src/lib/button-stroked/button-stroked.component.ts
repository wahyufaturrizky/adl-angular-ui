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
  @Output() eventChange: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  onEventChange(event: MouseEvent) {
    this.eventChange.emit(event);
  }
}
