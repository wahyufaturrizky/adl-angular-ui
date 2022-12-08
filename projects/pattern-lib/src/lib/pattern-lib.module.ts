import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonFabComponent } from './button-fab/button-fab.component';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { ButtonComponent } from './button/button.component';
import { ButtonMiniFabComponent } from './button-mini-fab/button-mini-fab.component';
import { ButtonExtendedFabComponent } from './button-extended-fab/button-extended-fab.component';
import { MatBadgeModule } from '@angular/material/badge';
import { BadgeTextComponent } from './badge-text/badge-text.component';
import { BadgeButtonComponent } from './badge-button/badge-button.component';
import { BadgeIconComponent } from './badge-icon/badge-icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonMiniFabComponent,
    ButtonExtendedFabComponent,
    BadgeTextComponent,
    BadgeButtonComponent,
    BadgeIconComponent,
  ],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatBadgeModule],
  exports: [
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
    ButtonFabComponent,
    ButtonMiniFabComponent,
  ],
})
export class PatternLibModule {}
