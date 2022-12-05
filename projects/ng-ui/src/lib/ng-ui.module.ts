import { NgModule } from '@angular/core';
import { NgUiComponent } from './ng-ui.component';
import { ButtonComponent } from './button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgUiComponent, ButtonComponent, ButtonRaisedComponent],
  imports: [MatButtonModule, CommonModule],
  exports: [NgUiComponent, ButtonRaisedComponent, ButtonComponent],
})
export class NgUiModule {}
