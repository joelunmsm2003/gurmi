import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MantraPage} from '../mantra/mantra';
import { JapjiPage} from '../japji/japji';
import { FuntionsPage} from '../funtions/funtions';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';


/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {

	 mantra:any=MantraPage;

	params: Object;
	mantras:any;

    libraryPage :any;
  japjiPage :any;
  aboutPage :any;
  about_griPage :any;
  pushPage:any;

	

  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.pushPage = FuntionsPage;
      this.libraryPage = LibraryPage;
      this.japjiPage = JapjiPage;
      this.aboutPage = AboutGurmukhiPage;
      this.about_griPage = AboutGriPage;


  	 this.mantras=[
{audio: 'assets/ALL/Mantra Master E.wav',
imagen: 'K',
nombre:'Mantra Mullop',
contenido:'kskskkskskaoaso',
letra: 'K'},
{audio: 'assets/ALL/0101 K.wav',
imagen: 'K',
nombre:'Mantra XYU',
contenido:'kskskksksssskaoaso',
letra: 'K'}


]



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }


  iramantra(data){

  	  	 this.navCtrl.push(MantraPage, {
      mantra: data,
    })
  }

}
