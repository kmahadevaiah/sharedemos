import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { AdvancedSettingsComponent } from './advanced-settings/advanced-settings.component';
import { PermissionsComponent } from './permissions/permissions.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview' },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'overview', component: OverviewComponent},
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', children: [
    { path: '', redirectTo: 'general' },
    { path: 'general', component: GeneralSettingsComponent },
    { path: 'advanced', component: AdvancedSettingsComponent },
  ]},
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
