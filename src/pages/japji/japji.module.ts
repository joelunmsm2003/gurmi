import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JapjiPage } from './japji';

@NgModule({
  declarations: [
    JapjiPage,
  ],
  imports: [
    IonicPageModule.forChild(JapjiPage),
  ],
})
export class JapjiPageModule {}
