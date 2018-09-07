import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent }  from './book-detail/book-detail.component';
const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: BookDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    [ RouterModule.forRoot(routes) ]
  ]
   
})
//creer le chemin book pour le composant book

export class AppRoutingModule { }
