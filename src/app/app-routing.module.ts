import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ConfessionsComponent } from './confessions/confessions.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'confessions', component: ConfessionsComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  HomeComponent, NavigationBarComponent,
                                    ConfessionsComponent, GalleryComponent];