import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';


const MaterialModules: Array<any> = [
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatDividerModule,
  MatFormFieldModule,
  MatRadioModule,
];

@NgModule({
  imports: [ MaterialModules ],
  exports: [ MaterialModules ],
})
export class AppMaterialModule { }
