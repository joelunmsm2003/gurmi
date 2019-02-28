import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FuntionsPage} from '../funtions/funtions';
import { LibraryPage} from '../library/library';
import { JapjiPage} from '../japji/japji';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';


@Component({
  
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage: any;
  libraryPage :any;
  japjiPage :any;
  aboutPage :any;
  about_griPage :any;
  vid:any;
  audio:any;

  tasks: any[] = [];

  //@ViewChild("audio") audio;
  
  constructor(public alertCtrl: AlertController,public navCtrl: NavController) {

  	  this.pushPage = FuntionsPage;
  	  this.libraryPage = LibraryPage;
  	  this.japjiPage = JapjiPage;
  	  this.aboutPage = AboutGurmukhiPage;
  	  this.about_griPage = AboutGriPage;
      this.audio = new Audio("assets/adillitas.mp3");

  
  }


  pause(){

     this.audio.pause();

  }

    play(){

     this.audio.play();

  }

}
