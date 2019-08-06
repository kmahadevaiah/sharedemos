import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { LibraryNavComponent } from './library-nav/library-nav.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionsComponent } from './permissions/permissions.component';

@NgModule({
  declarations: [
    OverviewComponent,
    ReportsComponent,
    LibraryNavComponent,
    PermissionsComponent,
    GeneralSettingsComponent,
    AdvancedSettingsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class LibraryModule { }
