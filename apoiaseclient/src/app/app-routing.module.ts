import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApoiadoresComponent } from './apoiadores.component';


const routes: Routes = [
  { path: '', redirectTo: '/campanhas', pathMatch: 'full' },
  { path: 'campanhas', component: AppComponent },
  { path: 'apoiadores', component: ApoiadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
