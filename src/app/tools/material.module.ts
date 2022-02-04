import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const sharedModules = [
  MatToolbarModule,
  MatCardModule,
  FlexLayoutModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class MaterialModule { }
