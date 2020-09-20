import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

const MaterialModules: Array<any> = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule,
];

@NgModule({
  imports: [ MaterialModules ],
  exports: [ MaterialModules ],
})
export class AppMaterialModule { }
