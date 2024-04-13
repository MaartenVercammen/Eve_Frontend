import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavContentComponent } from './components/side-nav-content/side-nav-content.component';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SideNavContentComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    SideNavContentComponent
  ]
})
export class CoreModule { }
