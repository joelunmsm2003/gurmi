import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage} from '../library/library';
import { JapjiPage} from '../japji/japji';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';
import {  HomePage} from '../home/home';
import { FuntionsPage} from '../funtions/funtions';
/**
 * Generated class for the AboutjapjimusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutjapjimusic',
  templateUrl: 'aboutjapjimusic.html',
})
export class AboutjapjimusicPage {

	  pushPage: any;
  libraryPage :any;
  japjiPage :any;
  aboutPage :any;
  about_griPage :any;
  homePage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	  this.pushPage = FuntionsPage;
      this.libraryPage = LibraryPage;
      this.japjiPage = JapjiPage;
      this.aboutPage = AboutGurmukhiPage;
      this.about_griPage = AboutGriPage;
      this.homePage=HomePage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutjapjimusicPage');
  }

}
