import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'library',
    loadChildren: () => import('./library/library.module').then(mod => mod.LibraryModule)
  },
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'activity-feed',
    loadChildren: () => import('./activity-feed/activity-feed.module').then(mod => mod.ActivityFeedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
