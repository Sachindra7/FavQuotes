import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibrariesPage } from './libraries';

@NgModule({
  declarations: [
    LibrariesPage,
  ],
  imports: [
    IonicPageModule.forChild(LibrariesPage),
  ],
})
export class LibrariesPageModule {}
