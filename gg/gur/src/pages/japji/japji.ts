import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage} from '../library/library';
import { FuntionsPage} from '../funtions/funtions';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';
import {  HomePage} from '../home/home';
import {  JapjimusicPage} from '../japjimusic/japjimusic';


/**
 * Generated class for the JapjiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-japji',
  templateUrl: 'japji.html',
})
export class JapjiPage {

	  libraryPage :any;
  japjiPage :any;
  japjimusicPage:any;
  aboutPage :any;
  about_griPage :any;
  homePage:any;
  pushPage:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	  this.pushPage = FuntionsPage;
  	  this.libraryPage = LibraryPage;
  	  this.japjiPage = JapjiPage;
  	  this.japjimusicPage = JapjimusicPage;
  	  this.aboutPage = AboutGurmukhiPage;
  	  this.about_griPage = AboutGriPage;
  	  this.homePage= HomePage

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JapjiPage');
  }

}
