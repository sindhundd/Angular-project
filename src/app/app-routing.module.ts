import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImgsearchComponent } from './imgsearch/imgsearch.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistorypageComponent } from './historypage/historypage.component';
import { HistoryService } from './services/history.service';

const routes: Routes = [{path:'search',component:ImgsearchComponent},
                        {path:'login',component:LoginComponent},
                        {path:'',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'history',component:HistorypageComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HistoryService],
})
export class AppRoutingModule { }
