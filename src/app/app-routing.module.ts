import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleEnum } from './dynamic-modal-with-content/common/Common';

const routes: Routes = [
  { path: "", redirectTo: ModuleEnum.DEFAULT_MODULE, pathMatch: "full" },
  { path: ModuleEnum.DEFAULT_MODULE, 
    loadComponent: () => import('../app/default-page/default-page.component').then((c) => c.DefaultPageComponent) 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
