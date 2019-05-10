import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BajaComponent } from './components/baja/baja.component';

@NgModule({
  declarations: [UsersTableComponent, SidebarComponent, BajaComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
