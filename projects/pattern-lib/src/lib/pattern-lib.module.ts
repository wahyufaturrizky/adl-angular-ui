import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonComponent } from './button/button.component';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';
import { ButtonFlatComponent } from './button-flat/button-flat.component';
import { ButtonStrokedComponent } from './button-stroked/button-stroked.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
  ],
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [
    ButtonComponent,
    ButtonRaisedComponent,
    ButtonStrokedComponent,
    ButtonFlatComponent,
    ButtonIconComponent,
  ],
})
export class PatternLibModule {}
