import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PatternLibComponent, ButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [PatternLibComponent, ButtonComponent],
})
export class PatternLibModule {}
