import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-button-raised',
  templateUrl: './button-raised.component.html',
  styleUrls: ['./button-raised.component.scss'],
})
export class ButtonRaisedComponent implements OnInit {
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
