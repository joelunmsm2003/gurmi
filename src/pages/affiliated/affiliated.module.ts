import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffiliatedPage } from './affiliated';

@NgModule({
  declarations: [
    AffiliatedPage,
  ],
  imports: [
    IonicPageModule.forChild(AffiliatedPage),
  ],
})
export class AffiliatedPageModule {}
