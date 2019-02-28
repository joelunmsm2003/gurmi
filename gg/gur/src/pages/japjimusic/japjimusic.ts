import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage} from '../library/library';
import { FuntionsPage} from '../funtions/funtions';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';
import {  HomePage} from '../home/home';

import {  AboutjapjimusicPage} from '../aboutjapjimusic/aboutjapjimusic';

/**
 * Generated class for the JapjimusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-japjimusic',
  templateUrl: 'japjimusic.html',
})
export class JapjimusicPage {

		  libraryPage :any;
  japjiPage :any;
  aboutPage :any;
  about_griPage :any;
  homePage:any;
  pushPage:any;
  aboutjapjimusicPage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.pushPage = FuntionsPage;
  	  this.libraryPage = LibraryPage;
  	 
  	  this.aboutPage = AboutGurmukhiPage;
  	  this.about_griPage = AboutGriPage;
  	  this.homePage= HomePage
  	  this.aboutjapjimusicPage=AboutjapjimusicPage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JapjimusicPage');
  }

}
