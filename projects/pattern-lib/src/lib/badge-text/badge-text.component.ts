import { Component, Input, OnInit } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'pl-badge-text',
  templateUrl: './badge-text.component.html',
  styleUrls: ['./badge-text.component.scss'],
})
export class BadgeTextComponent implements OnInit {
  constructor() {}

  @Input() label: string | null = 'Text goes here';
  @Input('matBadgeColor') color: ThemePalette = 'primary';
  @Input('matBadge') matBadge: string | number | undefined | null;
  @Input('matBadgeDescription') description: string = '';
  @Input('matBadgeHidden') hidden: boolean = false;
  @Input('matBadgeOverlap') overlap: boolean = false;
  @Input('matBadgePosition') position: MatBadgePosition = 'above after';
  @Input('matBadgeSize') size: MatBadgeSize = 'medium';

  ngOnInit(): void {}
}
