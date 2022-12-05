import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'nu-button-raised',
  templateUrl: './button-raised.component.html',
  styleUrls: ['./button-raised.component.scss'],
})
export class ButtonRaisedComponent implements OnInit {
  @Input()
  label: string = 'Text goes here ';

  @Input()
  color: ThemePalette = 'primary';

  @Input()
  disabled: boolean = false;

  @Output()
  eventChange: EventEmitter<any> = new EventEmitter();

  onEventChange(event: any) {
    this.eventChange.emit(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
