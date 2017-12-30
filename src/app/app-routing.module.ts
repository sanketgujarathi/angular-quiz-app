import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';


const routes:Routes = [
  { path:'start', component:StartComponent },
  { path:'', redirectTo:'/start', pathMatch:'full'},
  { path:'question', component:QuestionComponent },
  { path:'results', component:ResultsComponent }
  
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
