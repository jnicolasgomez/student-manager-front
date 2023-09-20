import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, 
  { path: 'students', component: StudentListComponent },
  { path: 'students/create', component: StudentCreateComponent },
  { path: 'students/edit/:id', component: StudentEditComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
