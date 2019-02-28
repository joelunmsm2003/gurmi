import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MantraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantra',
  templateUrl: 'mantra.html',
})
export class MantraPage {


	data:any;
	audio:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {



this.data= navParams.get('mantra');


  this.audio = new Audio(this.data.audio);
    
  

 console.log('que...',navParams.get('mantra'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantraPage');
  }


  reproduce(){


  	  this.audio.play();
  }



}
