import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [MatButtonModule],
  exports: [ButtonComponent],
})
export class PatternLibModule {}
