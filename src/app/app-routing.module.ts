import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FirstformComponent } from './firstform/firstform.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';

const routes: Routes = [{path:'',redirectTo:'firstform',pathMatch:'full'},
                        {path:'firstform',component:FirstformComponent},
                        {path:'secondform',component:SecondformComponent},
                      {path:'thirdform',component:ThirdformComponent},
                    {path:'header',component:HeaderComponent},
                  {path:'search',component:SearchComponent},
                  {path:':id',component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }