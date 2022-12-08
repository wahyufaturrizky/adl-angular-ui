import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';
import { ButtonRaisedComponent } from './button-raised/button-raised.component';

@NgModule({
  declarations: [ButtonComponent, ButtonRaisedComponent],
  imports: [MatButtonModule],
  exports: [ButtonComponent, ButtonRaisedComponent],
})
export class PatternLibModule {}
