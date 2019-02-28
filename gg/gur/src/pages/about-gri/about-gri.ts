import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisionPage} from '../vision/vision';
import { AffiliatedPage} from '../affiliated/affiliated';

/**
 * Generated class for the AboutGriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-gri',
  templateUrl: 'about-gri.html',
})
export class AboutGriPage {

	visionPage: any;
	affiliatedPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.visionPage = VisionPage;
  	this.affiliatedPage = AffiliatedPage;






  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutGriPage');
  }

}
